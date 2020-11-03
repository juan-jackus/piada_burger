import firebaseApp from 'firebase/app';
import 'firebase/database';
// import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBLTEpT5hQ5eJx6hj57yOC2HrgW-xGQQQk',
  authDomain: 'piada-burger-c9703.firebaseapp.com',
  databaseURL: 'https://piada-burger-c9703.firebaseio.com',
  projectId: 'piada-burger-c9703',
  storageBucket: 'piada-burger-c9703.appspot.com',
  messagingSenderId: '859766705367',
  appId: '1:859766705367:web:9384d091199db92eef3492',
  measurementId: 'G-ZBD2V9QJNZ',
};
const firebase = firebaseApp.initializeApp(config);
export const piadaBurgerDatabase = firebase.database().ref();
// export const auth = firebase.auth();
