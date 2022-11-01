import React, { useContext, useEffect } from 'react';
import Card from '../components/Card';
import Category from '../components/Category';
import Header from '../components/Header';
import GlobalContext from '../context/GlobalContext';
import styles from './Foods.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const maxItems = 12;
const maxCategorys = 5;

function Foods() {
  const { apiFoods,
    apiFoodsCategory,
    filterHandleClick,
    setheaderTitle,
  } = useContext(GlobalContext);

  useEffect(() => {
    setheaderTitle({ title: 'Foods', search: true });
  }, [setheaderTitle]);

  return (
    <>
      <Header />
      <main>
        <div
          className="d-flex flex-wrap justify-content-around"
          styles={ { width: '100%' } }
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
          {apiFoodsCategory.map((category, index) => (
            index < maxCategorys
          && <Category
            key={ category.strCategory }
            categoryName={ category.strCategory }
          />
          ))}
        </div>
        <div className="d-flex flex-wrap justify-content-center" id={ styles.foodRender }>
          {apiFoods.map((food, index) => (
            index < maxItems
          && <Card
            key={ food.idMeal }
            id={ food.idMeal }
            testid={ `${index}-recipe-card` }
            imagem={ food.strMealThumb }
            name={ food.strMeal }
            index={ index }
          />
          ))}
        </div>
      </main>
    </>
  );
}

export default Foods;
