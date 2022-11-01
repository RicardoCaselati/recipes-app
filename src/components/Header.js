import { Link } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import GlobalContext from '../context/GlobalContext';
import SearchBar from './SearchBar';
// import profileIcon from '../images/profileIcon.svg';
// import searchIcon from '../images/searchIcon.svg';
import styles from './Header.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  const { headerTitle } = useContext(GlobalContext);
  const [searchMenu, setsearchMenu] = useState({ showMenu: false });

  const handleSearch = (event) => {
    event.preventDefault();
    const changeHide = searchMenu;
    changeHide.showMenu = !changeHide.showMenu;
    setsearchMenu({ ...changeHide });
  };

  return (
    <div id={ styles.global_header }>
      <header
        className="d-flex justify-content-around align-items-center"
      >
        <Link to="/profile">
          <span
            id={ styles.icons }
            className="material-symbols-outlined"
            data-testid="profile-top-btn"
          >
            person
          </span>
          {/* <img src={ profileIcon } alt="profileIcon" data-testid="profile-top-btn" /> */}
        </Link>
        <h1 data-testid="page-title" id={ styles.title }>{ headerTitle.title }</h1>
        {headerTitle.search && (
          <button
            type="button"
            onClick={ handleSearch }
            style={ { backgroundColor: 'rgba(255, 255, 255, 0)', border: 'none' } }
          >

            <span
              id={ styles.icons }
              className="material-symbols-outlined"
              data-testid="search-top-btn"
            >
              search
            </span>
            {/* <img
              src={ searchIcon }
              alt="searchIcon"
              data-testid="search-top-btn"
            /> */}
          </button>)}
      </header>
      {searchMenu.showMenu
        && <SearchBar />}
    </div>
  );
}

export default Header;
