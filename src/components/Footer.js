import React from 'react';
import { Link } from 'react-router-dom';
// import drinkIcon from '../images/drinkIcon.svg';
// import mealIcon from '../images/mealIcon.svg';
import styles from './Footer.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer
      data-testid="footer"
      className="d-flex justify-content-around"
      id={ styles.global_footer }
    >
      <Link to="/drinks">
        <span
          id={ styles.footerEachIcon }
          className="material-symbols-outlined"
          data-testid="drinks-bottom-btn"
        >
          local_bar
        </span>
      </Link>
      <Link to="/foods">
        <span
          id={ styles.footerEachIcon }
          className="material-symbols-outlined"
          data-testid="food-bottom-btn"
        >
          restaurant
        </span>
      </Link>
    </footer>
  );
}

export default Footer;
