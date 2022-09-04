import { initializeApp } from 'firebase/app';
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBu7_vdJInp1o_jxR93BQ_BN0S1b0Xw90k",
  authDomain: "ecomm-f8381.firebaseapp.com",
  projectId: "ecomm-f8381",
  storageBucket: "ecomm-f8381.appspot.com",
  messagingSenderId: "589648330168",
  appId: "1:589648330168:web:cfe8717067af2f5a50a34d",
  measurementId: "G-B5YLCLD33Z"
  };

  const app = initializeApp(firebaseConfig);

  const storage = getStorage(app);
  
export  default storage