import React from 'react';

function InputErrorMessage(props) {
  return (
    <div className='message'>
      <span className='ml-1'>{props.children}</span>
    </div>
  );
}

export default InputErrorMessage;
