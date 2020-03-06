import firebase from 'firebase/app';
import 'firebase/firestore';
// import { useState, useEffect } from 'react';

const config = {
    apiKey: "AIzaSyC5pTXMBSWQLNiYWDEFngpBAoPZiQV9FxI",
    authDomain: "instagram-demo-batuchka.firebaseapp.com",
    databaseURL: "https://instagram-demo-batuchka.firebaseio.com",
    projectId: "instagram-demo-batuchka",
    storageBucket: "instagram-demo-batuchka.appspot.com",
    messagingSenderId: "840428458105",
    appId: "1:840428458105:web:dc78139738b65cda3d84a8",
    measurementId: "G-F7V1V1TNL9"
  };

firebase.initializeApp(config);

export default firebase.firestore();



// export const useFirebase = () => {
//     let [state, setState] = useState({firebase});

//     useEffect(() => {
//         let app;
//         if (!firebase.apps.length) {
//             firebase.initializeApp(config);
//         }
//         let firestore = firebase.firestore();
//         setState({app, firebase, firestore});
//     },[])

//     return state;
// };