var firebaseConfig = {
    apiKey: "AIzaSyAkJvJmoCat4XK9y5IT9gIOj252gJi2Fmw",
    authDomain: "jtokib.firebaseapp.com",
    databaseURL: "https://jtokib.firebaseio.com",
    projectId: "jtokib",
    storageBucket: "jtokib.appspot.com",
    messagingSenderId: "837734911350",
    appId: "1:837734911350:web:f7e1dea89ed11e4b277e57",
    measurementId: "G-R8QYLKFVHF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//run some stuff
var db = firebase.firestore();
var docRef = db.collection("jtokib").doc("data");

