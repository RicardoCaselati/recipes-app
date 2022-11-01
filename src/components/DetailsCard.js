import React from 'react';
import PropTypes from 'prop-types';
import { objectFilter } from '../helperFuncions';
import styles from './DetailsCard.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function DetailsCard(props) {
  if (!props) return null;
  const recipe = { ...props };
  const { strDrinkThumb, strMealThumb, strCategory, strAlcoholic,
    strDrink, strMeal, strInstructions, strYoutube } = recipe;

  const ingredients = objectFilter(recipe,
    (key, value) => key.includes('strIngredient') && value);

  const measures = objectFilter(props,
    (key, value) => key.includes('strMeasure') && value);

  const ingredientsMarkup = (ingredientsObj, measuresObj) => {
    const ingKeys = Object.keys(ingredientsObj);
    const measuresValues = Object.values(measuresObj);
    const markup = ingKeys.map((key, index) => (
      <li
        key={ key }
        data-testid={ `${index}-ingredient-name-and-measure` }
      >
        {`${ingredientsObj[key]} ${measuresValues[index] || ''}`}

      </li>
    ));
    return markup;
  };

  const renderVideo = (videoUrl) => {
    if (!videoUrl) return null;
    const videoId = videoUrl.split('=').at(1);
    return (
      <iframe
        data-testid="video"
        // width="560"
        // height="315"
        src={ `https://www.youtube-nocookie.com/embed/${videoId}` }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write;
          encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  };

  return (
    <article>
      <img
        className="img-fluid rounded-start"
        data-testid="recipe-photo"
        src={ strDrinkThumb || strMealThumb }
        alt={ `${strCategory} ${strDrink}` }
      />
      <div className="container-fluid">
        <div>
          <h2
            style={ { marginTop: '20px' } }
            id={ styles.recipeDetailsTitle }
            data-testid="recipe-title"
          >
            {strDrink || strMeal}
          </h2>
          <h6
            id={ styles.recipeDetailsSubTitle }
            data-testid="recipe-category"
          >
            {strAlcoholic || strCategory}
          </h6>
        </div>
      </div>
      <div className="container-fluid">
        <h5
          style={ { marginTop: '30px' } }
          id={ styles.sectionTitle }
        >
          Ingredients
        </h5>
        <ul id={ styles.bodyDescription }>
          { ingredientsMarkup(ingredients, measures) }
        </ul>
      </div>
      <div className="container-fluid">
        <h5
          style={ { marginTop: '30px' } }
          id={ styles.sectionTitle }
        >
          Instructions
        </h5>
        <p
          id={ styles.bodyDescription }
          data-testid="instructions"
        >
          {strInstructions}
        </p>
      </div>
      <div className="d-flex justify-content-center">
        { renderVideo(strYoutube) }
      </div>
    </article>
  );
}

DetailsCard.propTypes = {
  strDrinkThumb: PropTypes.string,
  strCategory: PropTypes.string,
  strDrink: PropTypes.string,
}.isRequired;

export default DetailsCard;
