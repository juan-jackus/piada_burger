import React, { useState, createContext } from 'react';
import { auth } from './firebase';

export const PiadaContext = createContext();

export const PiadaProvider = (props) => {
  const [user, setUser] = useState();
  const [authError, setAuthError] = useState({});
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [authSpinner, setAuthSpinner] = useState(false);

  // Listen to Auth change to set user
  auth.onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
    }
  });

  // Method to Log in User
  const logInHandler = ({ signinEmail, signinPassword }) => {
    setAuthSpinner(true);
    auth
      .signInWithEmailAndPassword(signinEmail, signinPassword)
      .then(() => {
        setAuthSpinner(false);
        showModalHandler(false);
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/user-not-found':
            setAuthError({
              name: 'signinEmail',
              message: 'Adresse Email incorect',
            });
            break;
          case 'auth/wrong-password':
            setAuthError({
              name: 'signinPassword',
              message: 'Mot de passe incorect',
            });
            break;

          default:
            setAuthError({
              name: 'defaultError',
              message:
                "Une erreur s'est produite lors de la connexion, veuillez reassayer dans 60 secondes",
            });
            break;
        }
        setAuthSpinner(false);
      });
  };

  // Method to Log out user
  const logOutHandler = () => {
    auth.signOut().catch((error) => console.log(error.message));
  };

  // Method to Sign Up user
  const singUpHandler = ({ userName, signupEmail, signupPassword }) => {
    setAuthSpinner(true);
    auth
      .createUserWithEmailAndPassword(signupEmail, signupPassword)
      .then(() => {
        auth.currentUser.updateProfile({
          displayName: userName,
        });
        setAuthSpinner(false);
        showModalHandler(false);
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/email-already-in-use':
            setAuthError({
              name: 'signupEmail',
              message: 'Adresse Email deja utilisé',
            });
            break;
          case 'auth/operation-not-allowed':
            setAuthError({
              name: 'signupEmail',
              message: 'Compte non activé',
            });
            break;

          default:
            setAuthError({
              name: 'defaultError',
              message:
                "Une erreur s'est produite, veuillez reassayer dans une minute",
            });
            break;
        }
        setAuthSpinner(false);
      });
  };

  const showModalHandler = (value) => {
    setShowLoginForm(value);
    document.body.style.overflow = 'auto';
  };

  return (
    <PiadaContext.Provider
      value={{
        user,
        logInHandler,
        logOutHandler,
        singUpHandler,
        showLoginForm,
        showModalHandler,
        authError,
        authSpinner,
        setAuthError,
      }}
    >
      {props.children}
    </PiadaContext.Provider>
  );
};
