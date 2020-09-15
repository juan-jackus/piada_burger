import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import { condimentsPng } from '../Checkout/Images/pngImport';
import { condimentsWebp } from '../Checkout/Images/webpImport';
import { friesPng } from '../Checkout/Images/pngImport';
import { friesWebp } from '../Checkout/Images/webpImport';
import { boissonPng } from '../Checkout/Images/pngImport';
import { boissonWebp } from '../Checkout/Images/webpImport';
import headerArrow from '../../Assets/arrows/left-header-arrow-marron.svg';

import Hamburger from '../Builder/Hamburger/Hamburger';
import SelectedIngredients from '../Checkout/SelectedIngredients';
import { EllipsisLoader } from '../Loader/Spiner';

const OderSummary = ({ orderSummary, ...props }) => {
  const [spiner, setspiner] = useState(true);

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
    setTimeout(() => {
      setspiner(false);
    }, 300);
  }, []);

  return (
    <div id='order-summary'>
      <div
        className='desktop-navigation-img d-none d-sm-block'
        onClick={() => props.history.goBack()}
      >
        <img src={headerArrow} alt='logo' />
      </div>
      {/* Odered Burger Box */}
      <div className='hamburger-box'>
        <Hamburger
          ingredients={orderSummary.ingredients}
          totalPrice={orderSummary.totalPrice}
          basePrice={orderSummary.basePrice}
        />
        {spiner && (
          <div className='spiner'>
            <EllipsisLoader />
          </div>
        )}
      </div>
      {/* Selected Ingredients Box */}
      <div className='ingredients-box'>
        <SelectedIngredients
          ingredients={orderSummary.ingredients}
          spiner={spiner}
        />
      </div>
      {/* Selected Drink Box */}
      <div className='d-flex justify-content-around mt-2'>
        {orderSummary.selectedDrink && (
          <div className='drink-box'>
            <h1 className='mb-3'>Boisson</h1>
            <picture>
              <source
                srcSet={boissonWebp[orderSummary.selectedDrink]}
                type='image/webp'
              />
              <img
                src={boissonPng[orderSummary.selectedDrink]}
                alt={orderSummary.selectedDrink}
              />
            </picture>

            <p className='text-capitalize'>{orderSummary.selectedDrink}</p>
            {spiner && (
              <div className='spiner'>
                <EllipsisLoader />
              </div>
            )}
          </div>
        )}
        {/* Selected Frie Box */}
        {orderSummary.selectedFrie && (
          <div className=' frie-box'>
            <h1 className='mb-3'>Frite</h1>
            <picture>
              <source
                srcSet={friesWebp[orderSummary.selectedFrie]}
                type='image/webp'
              />
              <img
                src={friesPng[orderSummary.selectedFrie]}
                alt={orderSummary.selectedFrie}
              />
            </picture>
            <p className='text-capitalize'>{orderSummary.selectedFrie}</p>
            {spiner && (
              <div className='spiner'>
                <EllipsisLoader />
              </div>
            )}
          </div>
        )}
      </div>
      {/* Selected Sauce Box */}
      {orderSummary.selectedSauce && (
        <div className='condiments-box'>
          <h1 className='mb-2'>Condiments</h1>
          <div className='d-flex justify-content-center relative flex-wrap'>
            {orderSummary.selectedSauce.map((condiment) => (
              <div
                className='d-flex flex-column align-items-center mx-3'
                key={condiment}
              >
                <picture>
                  <source
                    srcSet={condimentsWebp[condiment]}
                    type='image/webp'
                  />
                  <img
                    src={condimentsPng[condiment]}
                    className='condiment-img'
                    alt=''
                  />
                </picture>
                <p className='text-capitalize'>{condiment}</p>
              </div>
            ))}
            {spiner && (
              <div className='spiner'>
                <EllipsisLoader />
              </div>
            )}
          </div>
        </div>
      )}
      {/* Go Back and Delete Order Buttons */}
      <div className='order-summary-btn'>
        <button className='cancel-btn' onClick={() => props.history.goBack()}>
          Retour
        </button>

        <button
          className='cancel-btn delete-btn'
          disabled
          // onClick={() => this.props.history.goBack()}
        >
          Supprimer la Commande
        </button>
      </div>
    </div>
  );
};

export default withRouter(OderSummary);
