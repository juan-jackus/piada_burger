import React, { useState, createContext } from 'react';

export const PiadaContext = createContext();

export const PiadaProvider = (props) => {
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [showLoginForm, setShowLoginForm] = useState(false);

  const logInHandler = (username) => {
    setLogin(true);
    setUsername(username);
    localStorage.setItem('username', username);
  };

  const signUpHandler = (values) => {
    showModalHandler(false);
    console.log(values);
  };

  const logOutHandler = () => {
    setLogin(false);
    setUsername('');
    localStorage.removeItem('username');
  };

  const showModalHandler = (value) => {
    setShowLoginForm(value);
    document.body.style.overflow = 'auto';
  };

  return (
    <PiadaContext.Provider
      value={{
        login,
        username,
        logInHandler,
        signUpHandler,
        logOutHandler,
        showLoginForm,
        showModalHandler,
      }}
    >
      {props.children}
    </PiadaContext.Provider>
  );
};
