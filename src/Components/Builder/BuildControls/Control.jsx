import React from 'react';
import laituePng from '../../../Assets/build-control-img/small-salad.png';
import tomatePng from '../../../Assets/build-control-img/small-tomate.png';
import ognionPng from '../../../Assets/build-control-img/small-ognion.png';
import jambonPng from '../../../Assets/build-control-img/small-jambon.png';
import fromagePng from '../../../Assets/build-control-img/small-cheese.png';
import eggPng from '../../../Assets/build-control-img/small-egg.png';
import steakPng from '../../../Assets/build-control-img/small-steak.png';
import chickenPng from '../../../Assets/build-control-img/small-chicken.png';
// Props Destructuring
const Control = ({ moreAndLessHandler, ingredients, name }) => {
  // Find the ingredient by his name
  const foundedIngredient = ingredients.find((ingredient) => {
    return ingredient.id === name;
  });
  // Array of small image representation of ingredient in Build Control
  const ingredientsPng = {
    laitue: laituePng,
    tomate: tomatePng,
    ognion: ognionPng,
    jambon: jambonPng,
    fromage: fromagePng,
    omelette: eggPng,
    steak: steakPng,
    poulet: chickenPng,
  };
  //  Check to enable or disable Less and More Buttons
  const disableLess = foundedIngredient.count === 0;
  let disableMore = false;
  switch (foundedIngredient.id) {
    case 'laitue':
    case 'tomate':
    case 'ognion':
    case 'jambon':
      disableMore = foundedIngredient.count === 1;
      break;
    case 'fromage':
    case 'omelette':
    case 'steak':
    case 'poulet':
      disableMore = foundedIngredient.count === 2;
      break;
    default:
      break;
  }

  const spanStyle = {
    color: 'black',
    fontSize: '1rem',
    fontWeight: 'normal',
  };

  return (
    // Render the Ingredient informations with his Control Buttons
    <div
      className={'d-flex justify-content-end align-items-center ingredients'}
    >
      <div className=' mr-auto'>
        <span className='text-capitalize' style={spanStyle}>
          {name}
        </span>
        <img src={ingredientsPng[name]} className='ml-2' alt='' />
      </div>

      <button
        value='less'
        disabled={disableLess}
        onClick={(e) => moreAndLessHandler(name, e.target.value)}
      >
        -
      </button>
      <button
        value='more'
        className='more'
        disabled={disableMore}
        onClick={(e) => moreAndLessHandler(name, e.target.value)}
      >
        +
      </button>
    </div>
  );
};

export default Control;
