import React from 'react';
import Ingredient from './Ingredient';
import { EllipsisLoader } from '../../Loader/Spiner';
// Import Boisson image PNG and WEBP Librairies
import { hamburgerPng } from '../Images/pngImport';
import { hamburgerWebp } from '../Images/webpImport';

// props destructuring
const Hamburger = ({ ingredients, basePrice = 4.0, totalPrice }) => {
  return (
    <div id='hamburger'>
      {/* Top Bread */}
      <div className='image-loader-wrapper'>
        {/* Show loader when Image dosen't finish loading */}
        <div className='loader'>
          <EllipsisLoader />
        </div>
        {/* Serve WEBP or PNG of Top Bread Image */}
        <picture>
          <source srcSet={hamburgerWebp.topBread} type='image/webp' />
          <img className='top-bread' src={hamburgerPng.topBread} alt='' />
        </picture>
      </div>

      {totalPrice > basePrice ? (
        <>
          {/* Render Ingredient if it is added */}
          <Ingredient ingredients={ingredients} />
          {/* Render Bottom Bread 2 if Ingredient is added */}
          <div className='image-loader-wrapper'>
            {/* Show loader when Image dosen't finish loading */}
            <div className='loader'>
              <EllipsisLoader />
            </div>
            {/* Serve WEBP or PNG of Bottom Bread 2 Image */}
            <picture>
              <source srcSet={hamburgerWebp.bottomBread2} type='image/webp' />
              <img
                className='bottom-bread2'
                src={hamburgerPng.bottomBread2}
                alt=''
              />
            </picture>
          </div>
        </>
      ) : (
        <>
          {/* Render Add Ingredients Text if there is no added Ingredient */}
          <picture>
            <source
              srcSet={hamburgerPng.mobileText}
              media='(max-width: 600px), (max-height:500px)'
            />
            <img
              src={hamburgerPng.desktopText}
              alt=''
              className='add-ingredients-text'
            />
          </picture>
          {/* Render Bottom Bread 1 if there is no added Ingredient */}
          <div className='image-loader-wrapper'>
            {/* Show loader when Image dosen't finish loading */}
            <div className='loader'>
              <EllipsisLoader />
            </div>
            {/* Serve WEBP or PNG of Bottom Bread 1 Image */}
            <picture>
              <source srcSet={hamburgerWebp.bottomBread} type='image/webp' />
              <img
                className='bottom-bread'
                src={hamburgerPng.bottomBread}
                alt=''
              />
            </picture>
          </div>
        </>
      )}
    </div>
  );
};

export default Hamburger;
