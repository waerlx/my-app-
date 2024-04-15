import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
 import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
firebase.initializeApp(
  {
    apiKey: "AIzaSyDuP7zRbimLBUTvVlsUP_Rh6TK-5sc6VmI",
    authDomain: "auth-chat-b8e2c.firebaseapp.com",
    projectId: "auth-chat-b8e2c",
    storageBucket: "auth-chat-b8e2c.appspot.com",
    messagingSenderId: "412930840551",
    appId: "1:412930840551:web:92c9ddf98c81386b570f42",
    measurementId: "G-1035LKRYW1"
  }
)
export const Context = createContext(null)
const auth = firebase.auth()
const firestore = firebase.firestore()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    firebase,
    auth,
    firestore
  }}>
    <App/>
  </Context.Provider>,
)