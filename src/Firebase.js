// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcF8LuJewZv6aT-E9MZuIwLKa7h5Gycwc",
  authDomain: "auth-fe849.firebaseapp.com",
  projectId: "auth-fe849",
  storageBucket: "auth-fe849.appspot.com",
  messagingSenderId: "446993627154",
  appId: "1:446993627154:web:c21fddda7b2c921622c0cb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
auth.languageCode = "it";
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then(result => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(user);
      const accessToken = result.user.accessToken;
      const name = result.user.displayName;
      const email = result.user.email;
      const loginPhoto = result.user.photoURL;

      console.log(name);
      console.log(email);
      localStorage.setItem("accessToken", JSON.stringify(accessToken));
      localStorage.setItem("name", JSON.stringify(name));
      localStorage.setItem("email", email);
      localStorage.setItem("loginPhoto", loginPhoto);
      window.location.reload();
    })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
};
