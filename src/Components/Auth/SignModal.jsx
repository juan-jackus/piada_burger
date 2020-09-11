import React from 'react';

function SignModal(props) {
  // Disable Backgroung Scrool when Message pop up
  document.body.style.overflow = 'hidden';

  return (
    <div className='sign-modal'>
      <div className='sign-modal-content'>{props.children}</div>
    </div>
  );
}

export default SignModal;
