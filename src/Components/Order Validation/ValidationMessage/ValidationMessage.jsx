import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import garfieldImage from '../../../Assets/garfield.png';

function ValidationMessage() {
  const [Style, setStyle] = useState('d-none');
  const [buttonStyle, setButtonStyle] = useState('d-block');
  useEffect(() => {
    // Disable Backgroung Scrool when Message pop up
    document.body.style.overflow = 'hidden';
    // Set a Time Out to Show the close Button of Message
    // setTimeout(() => {
    //   setStyle('d-block');
    // }, 10000);
    // reactivate The Scrool when Component Will Unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className='message-background'>
      <div className='message-content'>
        {/* Go to Orders When Message is closed */}
        <NavLink to='/orders' className={Style}>
          <span className='close'>&times;</span>
        </NavLink>
        <div className='slider'>
          <div className='body-content'>
            <div className='message-body' key='personal-message'>
              <span>
                What do you get <br />
                when you cross <br />
                a hamburger <br />
                with a computer?
              </span>

              <div style={{ marginTop: '15px' }}>
                <button
                  className={buttonStyle + ' btnStyle'}
                  style={{ fontSize: '1.3rem' }}
                  onClick={() => {
                    setStyle('d-block');
                    setButtonStyle('d-none');
                  }}
                >
                  Answer
                </button>
                <div className={Style}>
                  <div className='text-right font-weight-bold mb-3'>
                    A Big Mac!
                  </div>
                  <div>
                    Thank you for <br /> testing the App!
                  </div>
                </div>
              </div>
            </div>

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
