import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import Control from './Control';
import { PiadaContext } from '../../../PiadaContext';
// Props Destructuring
const BuildControls = ({
  ingredients,
  totalPrice,
  basePrice,
  moreAndLessHandler,
  pathNavigation,
  ...props
}) => {
  // Get the Login Value and showModalHandler From Piada Context
  const { login, showModalHandler } = useContext(PiadaContext);
  // Array of all existing Ingredient for rendering in Build Controls
  const all_ingredients = [
    'laitue',
    'tomate',
    'ognion',
    'jambon',
    'omelette',
    'fromage',
    'steak',
    'poulet',
  ];

  const priceStyle = {
    padding: '0.1rem 0.3rem',
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: '7px',
  };

  return (
    <div id='buildControls'>
      <div className='buildControls-text'>
        <p className='mb-0 text-center px-1' style={{ color: '#242424' }}>
          Prix Actuel :
          <span className='font-weight-bold'>
            {' '}
            <span style={priceStyle}>{totalPrice}</span> XOF (Gratuit pour Vous)
          </span>
        </p>
        <span
          className='text-center mb-3 px-1'
          style={{ color: '#432104', fontSize: '0.8rem' }}
        >
          Ajouter ou retirer des ingredients à l'aide des Boutons
        </span>
      </div>
      <div className='controls'>
        {/* Render every Ingredient and their build controls */}
        {all_ingredients.map((ingredient, index) => {
          return (
            <Control
              name={ingredient}
              moreAndLessHandler={moreAndLessHandler}
              ingredients={ingredients}
              key={index}
            />
          );
        })}
      </div>

      {/* Order button */}
      <button
        className='btnStyle '
        disabled={totalPrice <= basePrice}
        onClick={
          login
            ? () => props.history.push('/checkout')
            : () => showModalHandler(true)
        }
      >
        {/* show different text if user is login or not */}
        {login ? 'COMMANDEZ' : 'ENTREZ VOTRE NOM POUR COMMANDER'}
      </button>
    </div>
  );
};

export default withRouter(BuildControls);
