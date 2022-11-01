import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import styles from './Category.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Category(props) {
  const { categoryName } = props;
  const { filterHandleClick } = useContext(GlobalContext);
  return (
    <div>
      <button
        className="btn btn-success mx-auto"
        id={ styles.eachBtn }
        type="button"
        data-testid={ `${categoryName}-category-filter` }
        name={ categoryName }
        onClick={ filterHandleClick }
      >
        {categoryName}
      </button>
    </div>
  );
}

Category.propTypes = {
  name: PropTypes.string,
}.isRequired;

export default Category;
