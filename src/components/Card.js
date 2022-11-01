import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import GlobalContext from '../context/GlobalContext';
import styles from './Card.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Card(props) {
  const { headerTitle } = useContext(GlobalContext);
  const { imagem, name, index, testid, id } = props;
  return (
    <Link to={ `${headerTitle.title.toLowerCase()}/${id}` }>
      <div
        id={ styles.card }
        className="card"
        style={ { width: '8rem' } }
        data-testid={ testid }
      >
        <img
          src={ imagem }
          className="card-img-top"
          alt={ name }
          data-testid={ `${index}-card-img` }
        />
        <div className="card-body">
          <h3
            id={ styles.cardTitle }
            className="card-title"
            data-testid={ `${index}-card-name` }
          >
            {name}
          </h3>
        </div>
      </div>
    </Link>
  );
}

Card.propTypes = {
  imagem: PropTypes.string,
  name: PropTypes.string,
  key: PropTypes.number,
}.isRequired;

export default Card;
