import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDGG6Ed2KStUxlAP-2Pi-ijosn3yVCPX_o",
    authDomain: "cart-project-fc8d2.firebaseapp.com",
    projectId: "cart-project-fc8d2",
    storageBucket: "cart-project-fc8d2.appspot.com",
    messagingSenderId: "393521033098",
    appId: "1:393521033098:web:348608da6b99fc9de42273"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;

ReactDOM.render(<App />, document.getElementById('root'));
