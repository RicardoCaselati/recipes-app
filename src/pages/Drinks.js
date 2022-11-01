import React, {
  // useState,
  useContext, useEffect } from 'react';
import Card from '../components/Card';
import Category from '../components/Category';
import Header from '../components/Header';
import GlobalContext from '../context/GlobalContext';
// import CardMain from '../components/CardMain';
import styles from './Drinks.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const maxItems = 12;
const maxCategorys = 5;

function Drinks() {
  const { apiDrinks,
    apiDrinksCategory,
    filterHandleClick,
    setheaderTitle,
    // recipesAPIReturn,
  } = useContext(GlobalContext);

  // const [recipes, setRecipes] = useState('');

  // const renderCard = (data) => data
  //   .map((response, index) => {
  //     const number = 12;
  //     return index < number && <CardMain
  //       key={ index }
  //       index={ index }
  //       cardInfo={ response }
  //     />;
  //   });

  useEffect(() => {
    setheaderTitle({ title: 'Drinks', search: true });
  }, [setheaderTitle]);

  // useEffect(() => {
  //   if (recipesAPIReturn.drinks) {
  //     setRecipes(renderCard(recipesAPIReturn.drinks));
  //   }
  // }, [recipesAPIReturn]);

  return (
    <>
      <Header />
      <main className="main">
        <div
          className="d-flex flex-wrap justify-content-around"
          id={ styles.categoryButtons }
        >
          <button
            className="btn btn-success"
            id={ styles.eachBtn }
            name="All"
            type="button"
            data-testid="All-category-filter"
            onClick={ filterHandleClick }
          >
            All
          </button>
          {apiDrinksCategory.map((category, index) => (
            index < maxCategorys
          && <Category
            key={ category.strCategory }
            categoryName={ category.strCategory }
          />
          ))}

        </div>
        <div
          className="d-flex flex-wrap justify-content-center"
          id={ styles.drinkRender }
        >
          {apiDrinks.map((food, index) => (
            index < maxItems
          && <Card
            key={ food.idDrink }
            id={ food.idDrink }
            testid={ `${index}-recipe-card` }
            imagem={ food.strDrinkThumb }
            name={ food.strDrink }
            index={ index }
          />
          ))}
        </div>
      </main>
      {/* { recipes } */}
    </>
  );
}

export default Drinks;
