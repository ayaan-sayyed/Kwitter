
//ADD YOUR FIREBASE LINKS HERE
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDLUKvrtLKICrkHfUEHDDS08kXFV48DHFU",
  authDomain: "class-test-fcb55.firebaseapp.com",
  projectId: "class-test-fcb55",
  storageBucket: "class-test-fcb55.appspot.com",
  messagingSenderId: "377651216619",
  appId: "1:377651216619:web:89787e7cb453cbaba37eae"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
