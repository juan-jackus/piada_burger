import { auth } from '../firebase';

export const setAuthSpinner = (val) => {
  return {
    type: 'SET_AUTH_SPINNER',
    value: val,
  };
};

export const showModalHandler = (val) => {
  return {
    type: 'SHOW_MODAL_HANDLER',
    value: val,
  };
};

export const setAuthError = (authError) => {
  return {
    type: 'SET_AUTH_ERROR',
    value: authError,
  };
};

export const authStateChanged = (authUser) => {
  return {
    type: 'AUTH_STATE_CHANGED',
    value: authUser,
  };
};

// Method to Log In user
export const logInHandler = (signinEmail, signinPassword) => {
  // Use Thunk to perform asynchronous action
  return (dispatch) => {
    dispatch(setAuthSpinner(true));
    auth
      .signInWithEmailAndPassword(signinEmail, signinPassword)
      .then(() => {
        dispatch(setAuthSpinner(false));
        dispatch(showModalHandler(false));
      })
      .catch((error) => {
        let authError = {};
        switch (error.code) {
          case 'auth/user-not-found':
            authError = {
              name: 'signinEmail',
              message: 'Adresse Email incorect',
            };
            break;
          case 'auth/wrong-password':
            authError = {
              name: 'signinPassword',
              message: 'Mot de passe incorect',
            };
            break;

          default:
            authError = {
              name: 'defaultError',
              message:
                "Un erreur s'est produite lors de la connexion, veuillez reassayer dans 60 secondes",
            };
            break;
        }
        dispatch(setAuthSpinner(false));
        dispatch(setAuthError(authError));
      });
  };
};

// Method to Sign Up user
export const singUpHandler = (userName, signupEmail, signupPassword) => {
  // Use Thunk to perform asynchronous action
  return (dispatch) => {
    dispatch(setAuthSpinner(true));
    auth
      .createUserWithEmailAndPassword(signupEmail, signupPassword)
      .then(() => {
        auth.currentUser.updateProfile({
          displayName: userName,
        });
        dispatch(setAuthSpinner(false));
        dispatch(showModalHandler(false));
      })
      .catch((error) => {
        let authError = {};
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
        dispatch(setAuthSpinner(false));
        dispatch(setAuthError(authError));
      });
  };
};

export const logOutHandler = () => {
  return {
    type: 'LOG_OUT_HANDLER',
  };
};
