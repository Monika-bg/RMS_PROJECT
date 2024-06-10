import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import SubHeading from './Viewmenu/SubHeading';
import MenuItem from './Viewmenu/MenuItem';
import data from './Viewmenu/data';
import images from './Viewmenu/Images';
import './SpeciallMenu.css';

const SpecialMenu = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleViewMore = () => {
    // Handle the View More button click to navigate to the login page
    navigate('/login');
  };

  return (
    <div className="app__specialMenu section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="Menu that fits your palate" />
        <h1 className="headtext__cormorant special__heading">Today's Special</h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine">
          <p className="app__specialMenu-menu_heading">Popular Dishes</p>
          <div className="app__specialMenu_menu_items">
            {data.wines.map((wine, index) => (
              <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="menu__img" />
        </div>

        <div className="app__specialMenu-menu_cocktails">
          <p className="app__specialMenu-menu_heading">Popular Snacks</p>
          <div className="app__specialMenu_menu_items">
            {data.cocktails.map((cocktail, index) => (
              <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 15 }}>
        <Link to="/login">
          <button type="button" className="custom__button" onClick={handleViewMore}>
            FULL MENU
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SpecialMenu;
