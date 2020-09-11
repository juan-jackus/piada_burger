import React from 'react';

const SelectedIngredients = ({ ingredients }) => {
  return (
    <>
      <h1>Ingredients</h1>
      {/* List of added Ingredients in the Burger */}
      <div className='d-flex flex-wrap justify-content-center mx-3 relative'>
        {ingredients &&
          ingredients.map((ingredient) => {
            if (ingredient.count > 0) {
              return (
                <p
                  style={{ margin: '0.5rem' }}
                  className='text-capitalize text-center'
                  key={ingredient.id}
                >
                  {ingredient.id}{' '}
                  <span className='badge badge-secondary rounded'>
                    {ingredient.count}
                  </span>
                </p>
              );
            } else return null;
          })}
      </div>
    </>
  );
};

export default SelectedIngredients;
