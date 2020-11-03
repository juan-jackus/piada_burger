import React from 'react';
// Import Boisson image PNG Librairies
import { ingredientsPng } from '../Images/pngImport';

const Ingredient = ({ ingredients }) => {
  // Style for second Egg
  let styleOmelette = {
    zIndex: '-10',
    marginTop: '-19px',
  };

  // Get Cheese, egg, steak, and chicken to position them in the burger
  const cheese = ingredients.find((ingredient) => ingredient.id === 'cheese');
  const egg = ingredients.find((ingredient) => ingredient.id === 'egg');
  const steak = ingredients.find((ingredient) => ingredient.id === 'steak');
  const chicken = ingredients.find((ingredient) => ingredient.id === 'chicken');
  // variable to place differently ingredient
  let placement = false;
  // Check the number of Cheese, egg, steak or chicken to place the Cheese
  if (
    (steak.count === 2 || chicken.count === 2) &&
    cheese.count === 2 &&
    egg.count === 2
  ) {
    placement = 'triple';
  } else if (cheese.count === 2 && egg.count === 2) {
    placement = 'double';
  } else if ((steak.count === 2 || chicken.count === 2) && cheese.count === 2) {
    placement = 'cheese';
  } else if ((steak.count === 2 || chicken.count === 2) && egg.count === 2) {
    placement = 'egg';
  }

  // console.log(placement);

  return (
    // Render all ingredients selected by the user with their image
    ingredients.map((ingredient) => {
      let jsxCode = [];
      for (let i = 0; ingredient.count > i; i++) {
        switch (ingredient.id) {
          case 'salad':
            jsxCode.push(
              <img
                key={i}
                className='salad'
                src={ingredientsPng.salad}
                alt=''
              />
            );
            break;
          case 'tomato':
            jsxCode.push(
              <img
                key={i}
                className='tomate'
                src={ingredientsPng.tomato}
                alt=''
              />
            );
            break;
          case 'ognion':
            jsxCode.push(
              <img
                key={i}
                className='ognion'
                src={ingredientsPng.ognion}
                alt=''
              />
            );
            break;
          case 'ham':
            jsxCode.push(
              <img key={i} className='bacon' src={ingredientsPng.ham} alt='' />
            );
            break;
          case 'cheese':
            // place normaly Cheese when there is 1 Cheese and {1 or 2} egg, steak or chicken
            // Or if there is 2 Cheese and 1 egg, steak or chicken
            if (placement === false || placement === 'egg') {
              jsxCode.push(
                <img
                  key={i}
                  style={i === 1 ? { zIndex: -5 } : {}}
                  className={i === 0 ? 'cheese' : 'cheese scale'} // flip horizontaly the second Cheese with 'scale' class
                  src={ingredientsPng.cheese}
                  alt=''
                />
              );
            }
            break;
          case 'egg':
            // specialement Placement if there is 2 Cheese and 2 egg
            if (placement === 'double') {
              jsxCode.push(
                <img
                  key={'cheese' + i}
                  style={i === 1 ? { zIndex: -7 } : {}} // stack second Cheese behind the first Cheese and egg
                  className={i === 0 ? 'cheese' : 'cheese scale'} // flip horizontaly the second Cheese with 'scale' class
                  src={ingredientsPng.cheese}
                  alt=''
                />,
                <img
                  key={'omelette' + i}
                  style={i === 1 ? { zIndex: -8 } : {}} // stack second egg behind the 2 Cheese and first egg
                  className={i === 0 ? 'egg' : 'egg2'}
                  src={i === 0 ? ingredientsPng.egg : ingredientsPng.egg2}
                  alt=''
                />
              );
            }
            // Place normally egg when there is 1 egg, {1 or 2} Cheese or {1 or 2} steak or chicken
            // Or if there is {1 or 2} egg and 1 Cheese, steak or chicken
            else if (placement === false) {
              jsxCode.push(
                <img
                  key={i}
                  className={i === 0 ? 'egg' : 'egg2'}
                  src={i === 0 ? ingredientsPng.egg : ingredientsPng.egg2}
                  alt=''
                />
              );
            }
            break;

          case 'steak':
          case 'chicken':
            // check if there is placement to make
            if (placement !== false && placement !== 'double') {
              // specialement placement if there is 2 Cheese, 2 egg and 2 steak or chicken
              if (placement === 'triple') {
                jsxCode.push(
                  // place the Cheese
                  <img
                    key={'cheese' + i}
                    className='cheese'
                    style={i === 1 ? { zIndex: -9 } : {}} // stack the second Cheese behind the first steak
                    src={ingredientsPng.cheese}
                    alt=''
                  />,
                  // place the egg
                  <img
                    key={'egg' + i}
                    className={i === 0 ? 'egg' : 'egg2'}
                    style={i === 1 ? styleOmelette : {}} // place the second Cheese behind the first steak or chicken
                    src={i === 0 ? ingredientsPng.egg : ingredientsPng.egg2}
                    alt=''
                  />,
                  // place the steak or chicken
                  <img
                    key={ingredient.id + i}
                    className='steak-chicken'
                    style={i === 1 ? { zIndex: -11 } : {}} // stack the second steak or chicken behind all
                    // Switch between 2 steak image and 2 chicken image
                    src={
                      ingredient.id === 'steak' // if ingredient selected is steak
                        ? i === 0
                          ? ingredientsPng.steak
                          : ingredientsPng.steak2 //switch between 2 steak image
                        : // or ingredient selected is chicken
                        i === 0
                        ? ingredientsPng.chicken
                        : ingredientsPng.chicken2 //switch between 2 chicken image
                    }
                    alt=''
                  />
                );
              }
              // specialement placement if there is 2 Cheese and 2 Steak or Chicken
              // if there is 2 Cheese and 2 steak or chicken and 1 Egg
              else if (placement === 'cheese') {
                // check if there is one Egg
                // prettier-ignore
                const oneEgg = egg.count === 1 ? 
                      [
                        <img
                          key={'egg' + i}
                          className={i === 0 ? 'egg' : 'egg2'}
                          style={i === 1 ? styleOmelette : {}} // place the second egg behind the first steak or chicken
                          src={i === 0 ? ingredientsPng.egg : ingredientsPng.egg2}
                          alt=''
                        />,
                      ] : null;
                jsxCode.push(
                  // place Cheese
                  <img
                    key={'cheese' + i}
                    className='cheese'
                    style={i === 1 ? { zIndex: -9 } : {}} // place the second Cheese behind the first steak or chicken
                    src={ingredientsPng.cheese}
                    alt=''
                  />,
                  // if there is one Egg place the Egg only one time
                  i === 0 && oneEgg,
                  // place steak or chicken
                  <img
                    key={ingredient.id + i}
                    className='steak-chicken'
                    style={i === 1 ? { zIndex: -11 } : {}} // stack the second steak or chicken behind all
                    // prettier-ignore
                    // Switch between 2 steak image and 2 chicken image
                    src={ingredient.id === 'steak'? // if ingredient selected is steak
                      (i === 0 ? ingredientsPng.steak : ingredientsPng.steak2) //switch between 2 steak image
                        : // or ingredient selected is chicken
                      ( i === 0 ? ingredientsPng.chicken : ingredientsPng.chicken2) //switch between 2 chicken image
                    }
                    alt=''
                  />
                );
              }
              // specialement placement if there is 2 egg and 2 steak or chicken
              else if (placement === 'egg') {
                jsxCode.push(
                  // place egg
                  <img
                    key={'egg' + i}
                    className={i === 0 ? 'egg' : 'egg2'}
                    style={i === 1 ? styleOmelette : {}} // place the second egg behind the first steak or chicken
                    src={i === 0 ? ingredientsPng.egg : ingredientsPng.egg2}
                    alt=''
                  />,
                  // place steak or chicken
                  <img
                    key={ingredient.id + i}
                    className='steak-chicken'
                    style={i === 1 ? { zIndex: -11 } : {}} // place the second steak behind the second Cheese
                    // prettier-ignore
                    // Switch between 2 steak image and 2 chicken image
                    src={ingredient.id === 'steak'? // if ingredient selected is steak
                      (i === 0 ? ingredientsPng.steak : ingredientsPng.steak2) //switch between 2 steak image
                        : // or ingredient selected is chicken
                      ( i === 0 ? ingredientsPng.chicken : ingredientsPng.chicken2) //switch between 2 chicken image
                    }
                    alt=''
                  />
                );
              }
            }
            // Else place normally Steak or chicken
            else {
              jsxCode.push(
                <img
                  key={ingredient.id + i}
                  className='steak-chicken'
                  style={i === 0 ? { zIndex: -9 } : { zIndex: -10 }} // place the second steak or chicken behind the first
                  // prettier-ignore
                  // Switch between 2 steak image and 2 chicken image
                  src={ingredient.id === 'steak'? // if ingredient selected is steak
                  (i === 0 ? ingredientsPng.steak : ingredientsPng.steak2) //switch between 2 steak image
                    : // or ingredient selected is chicken
                  ( i === 0 ? ingredientsPng.chicken : ingredientsPng.chicken2) //switch between 2 chicken image
                }
                  alt=''
                />
              );
            }
            break;

          default:
            break;
        }
      }
      return jsxCode;
    })
  );
};

export default Ingredient;
