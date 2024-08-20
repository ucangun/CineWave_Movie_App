import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOlJXGRS61eH9wSAVcfHC5opIRIiXGJdM",
  authDomain: "cinewave-app-797cf.firebaseapp.com",
  projectId: "cinewave-app-797cf",
  storageBucket: "cinewave-app-797cf.appspot.com",
  messagingSenderId: "334491321075",
  appId: "1:334491321075:web:bc8b6059152f3bbdc5ad86",
  measurementId: "G-PSHHZMT23S",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
