import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJGWnCl22xT-K6qIfo_IIJGsCkgMBWq78",
  authDomain: "zrzutkavideo.firebaseapp.com",
  projectId: "zrzutkavideo",
  storageBucket: "zrzutkavideo.firebasestorage.app",
  messagingSenderId: "789118978670",
  appId: "1:789118978670:web:a1b88220259c52d132347f",
  measurementId: "G-2WMHR5SM2S"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
