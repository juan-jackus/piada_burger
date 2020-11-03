import React from 'react';
// Import CONDIMENTS image PNG and WEBP Librairies
import { condimentsPng } from './Images/pngImport';
import { condimentsWebp } from './Images/webpImport';

const Condiments = React.memo(({ selectedSauce, selectedSaucesHandler }) => {
  const condiments = [
    'ketchup',
    'moutarde',
    'mayo',
    'bolognese',
    'barbecue',
    'guacamole',
  ];

  return (
    // Render the Array of all CONDIMENTS
    <div id='condiments'>
      <h1>Condiments</h1>
      <p className='instruction-text'>Check to select a condiment</p>
      <div className='condiment-box'>
        {condiments.map((condiment) => (
          // Using label to be able to check box by clicking on image
          <label className='condiment' key={condiment}>
            {/* Serve WEBP or PNG Image */}
            <picture>
              <source srcSet={condimentsWebp[condiment]} type='image/webp' />
              <img
                className='condiment-img'
                src={condimentsPng[condiment]}
                alt={condiment}
              />
            </picture>

            <div className='custom-control custom-checkbox m-0'>
              <input
                className='custom-control-input m-0'
                type='checkbox'
                id={condiment}
                value={condiment}
                checked={selectedSauce.includes(condiment)}
                onChange={(e) => selectedSaucesHandler(e.target.value)}
              />
              <label
                className='custom-control-label text-capitalize'
                htmlFor={condiment}
              >
                {condiment}
              </label>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
});

export default Condiments;
