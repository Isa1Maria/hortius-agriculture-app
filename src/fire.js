import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDTODy72Z5sokbMf-RF5o-cqiofJF-loYI",
    authDomain: "hortios.firebaseapp.com",
    projectId: "hortios",
    storageBucket: "hortios.appspot.com",
    messagingSenderId: "995730726073",
    appId: "1:995730726073:web:552e90b621da90b09e0f68"
  };

 const fire = firebase.initializeApp(firebaseConfig);


 export default fire;