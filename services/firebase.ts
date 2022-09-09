
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA28LngNDswkBguGBFnhatGmhNHyAWfI6A",
  authDomain: "lumecode-blog.firebaseapp.com",
  databaseURL: "https://lumecode-blog-default-rtdb.firebaseio.com",
  projectId: "lumecode-blog",
  storageBucket: "lumecode-blog.appspot.com",
  messagingSenderId: "1028837207238",
  appId: "1:1028837207238:web:0a1ce8664a74e80e1c7bc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);  

export const auth = getAuth(app);