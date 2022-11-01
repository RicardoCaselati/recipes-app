import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import GlobalContext from '../context/GlobalContext';
// import styles from './Foods.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Profile() {
  const { setheaderTitle } = useContext(GlobalContext);
  useEffect(() => {
    setheaderTitle({ title: 'Profile', search: false });
  }, [setheaderTitle]);

  const getEmail = () => {
    if (!localStorage.getItem('user')) return null;
    const email = JSON.parse(localStorage.getItem('user'));
    return email.email;
  };
  const logout = () => {
    localStorage.clear();
  };

  return (
    <>
      <Header />
      <main
        className="d-flex flex-column justify-content-center align-items-center"
        style={ { height: '100vh', margin: '0 20px' } }
      >
        <p data-testid="profile-email">{ getEmail() }</p>
        {/* <Link to="/done-recipes">
          <button
            style={ { padding: '2px 50px' } }
            className="btn btn-success mb-1"
            type="button"
            data-testid="profile-done-btn"
          >
            Done Recipes
          </button>
        </Link> */}
        <Link to="/favorite-recipes">
          <button
            style={ { padding: '2px 42px' } }
            className="btn btn-success mb-1"
            type="button"
            data-testid="profile-favorite-btn"
          >
            Favorite Recipes
          </button>
        </Link>
        <Link to="/">
          <button
            style={ { padding: '2px 79px' } }
            className="btn btn-success mb-1"
            type="button"
            data-testid="profile-logout-btn"
            onClick={ logout }
          >
            Logout
          </button>
        </Link>
      </main>
    </>
  );
}

export default Profile;
