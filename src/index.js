import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase'


var firebaseConfig = {
  apiKey: "AIzaSyDjfya5ivQGKQF8yBB3qvgc7qfVkRnIoqE",
  authDomain: "dentistproject-bdb92.firebaseapp.com",
  databaseURL: "https://dentistproject-bdb92.firebaseio.com",
  projectId: "dentistproject-bdb92",
  storageBucket: "dentistproject-bdb92.appspot.com",
  messagingSenderId: "751670090076",
  appId: "1:751670090076:web:e46d1d123d67864cc4c999",
  measurementId: "G-B2RD2EFFVK"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
