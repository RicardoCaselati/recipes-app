import React, { useEffect, useState } from 'react';
import isEmail from 'validator/lib/isEmail';
import PropTypes from 'prop-types';
import logo from '../images/logo.png';
import styles from './Login.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login(props) {
  const [disabled, setDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const SIX = 6;
    if (password.length > SIX && isEmail(email)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password]);

  const handleInput = ({ target }) => {
    if (target.type === 'email') {
      setEmail(target.value);
    }
    if (target.type === 'password') {
      setPassword(target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { history } = props;
    const userObj = { email };
    localStorage.setItem('user', JSON.stringify(userObj));
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
    history.push('/foods');
  };

  return (
    <form className="conteiner-fluid" autoComplete="off">
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        id={ styles.grid }
      >
        <img
          src={ logo }
          alt="Logo RecipeBook"
          className="img-fluid"
          style={ { width: '200px' } }
        />
        <div className="mx-4">
          <label htmlFor="email">
            <input
              className={ styles.input }
              placeholder="E-mail"
              id="email"
              type="email"
              data-testid="email-input"
              value={ email }
              onChange={ handleInput }
              style={ { marginTop: '-200px' } }
            />
          </label>

          <label htmlFor="password">
            <input
              className={ styles.input }
              placeholder="Password"
              type="password"
              minLength="6"
              data-testid="password-input"
              value={ password }
              onChange={ handleInput }
            />
          </label>
          <button
            className="btn btn-success"
            id={ styles.btn }
            type="submit"
            disabled={ disabled }
            data-testid="login-submit-btn"
            onClick={ handleSubmit }
          >
            Login

          </button>
        </div>
      </div>
    </form>
  );
}

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Login;
