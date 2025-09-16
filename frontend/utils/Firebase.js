import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  // authDomain: "loginonecart.firebaseapp.com",
  // projectId: "loginonecart",
  // storageBucket: "loginonecart.firebasestorage.app",
  // messagingSenderId: "242165258894",
  // appId: "1:242165258894:web:0155a2ced93e20073247df"


  //
    // apiKey: "AIzaSyCg6zSrFRAneh2Ph-oIs7neEhCto1zgKFE",
  authDomain: "loginecommerce-50524.firebaseapp.com",
  projectId: "loginecommerce-50524",
  storageBucket: "loginecommerce-50524.firebasestorage.app",
  messagingSenderId: "499906267026",
  appId: "1:499906267026:web:a7a390c5a693620627234b"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export {auth , provider}


