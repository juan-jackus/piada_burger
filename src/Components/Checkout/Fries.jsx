import React from 'react';
import { friesPng } from './Images/pngImport';
import { friesWebp } from './Images/webpImport';

const Fries = React.memo(({ selectedFrie, selectedFrieHandler }) => {
  const fries = ['standard', 'waffle', 'taterTots'];

  return (
    <div id='fries'>
      <h1>Frites</h1>
      <p className='instruction-text'>Selectionner une barquette de Frites</p>
      <div className='d-flex frite-box'>
        {/* Render the Array of all Fries  */}
        {fries.map((frie) => (
          // Using label to be able to check box by clicking on image
          <label className='frite mx-2' key={frie}>
            {/* Serve WEBP or PNG Image */}
            <picture>
              <source srcSet={friesWebp[frie]} type='image/webp' />
              <img src={friesPng[frie]} alt={frie} />
            </picture>

            <div className='custom-control custom-radio'>
              <input
                type='radio'
                className='custom-control-input'
                id={frie}
                value={frie}
                name='frie'
                checked={selectedFrie === frie}
                onChange={(e) => selectedFrieHandler(e.target.value)}
              />
              <label
                className='custom-control-label text-capitalize'
                htmlFor={frie}
              >
                {frie}
              </label>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
});
export default Fries;
