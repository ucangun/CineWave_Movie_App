import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

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

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((err) => console.error(err));
};
