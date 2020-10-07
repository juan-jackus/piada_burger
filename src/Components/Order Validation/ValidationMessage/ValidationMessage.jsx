import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import garfieldImage from '../../../Assets/garfield.png';

import personalMessage from './Messages';

function ValidationMessage({ phoneNumber }) {
  const [closeCrossStyle, setStyle] = useState('d-none');
  useEffect(() => {
    // Disable Backgroung Scrool when Message pop up
    document.body.style.overflow = 'hidden';
    // Set a Time Out to Show the close Button of Message
    setTimeout(() => {
      setStyle('d-block');
    }, 7000);
    // reactivate The Scrool when Component Will Unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Get the Message to show
  const message = personalMessage(phoneNumber);

  return (
    <div className='message-background'>
      <div className='message-content'>
        {/* Go to Orders When Message is closed */}
        <NavLink to='/orders' className={closeCrossStyle}>
          <span className='close'>&times;</span>
        </NavLink>
        <div className='slider'>
          <div className='body-content'>
            {message}
            <div className='garfield-image'>
              <img src={garfieldImage} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ValidationMessage;
