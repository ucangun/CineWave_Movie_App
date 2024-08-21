import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "./firebase-config";
import { useNavigate } from "react-router-dom";
import { toastError, toastSuccess } from "../helpers/ToastNotify";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // Register
  const [registerUserName, setRegisterUserName] = useState("");
  const [registerLastName, setRegisterLastName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  // Login
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // isAuth
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // user
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Clean up subscription on unmount
    return () => unsubscribe();
  }, []);

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      toastSuccess("Registered Successfully");
      navigate("/");
      console.log(user);
    } catch (error) {
      toastError(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      toastSuccess("Logged in Successfully");
      navigate("/");
      console.log(user);
      setIsAuthenticated(true);
    } catch (error) {
      toastError(error.message);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setIsAuthenticated(false);
      toastSuccess("Logged out Successfully");
      navigate("/");
    } catch (error) {
      toastError(error.message);
    }
  };

  // Google

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
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

  return (
    <AuthContext.Provider
      value={{
        registerUserName,
        setRegisterUserName,
        registerLastName,
        setRegisterLastName,
        registerEmail,
        setRegisterEmail,
        registerPassword,
        setRegisterPassword,
        loginEmail,
        setLoginEmail,
        loginPassword,
        setLoginPassword,
        register,
        login,
        logout,
        user,
        isAuthenticated,
        signInWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
