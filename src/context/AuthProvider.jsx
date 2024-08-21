import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../auth/firebase-config";
import { useNavigate } from "react-router-dom";
import { toastError, toastSuccess } from "../helpers/ToastNotify";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

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

  const displayName = `${registerUserName} ${registerLastName}`;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsAuthenticated(!!currentUser);
      console.log(user);
    });

    // Clean up subscription on unmount
    return () => unsubscribe();
  }, [user]);

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      toastSuccess("Registered Successfully");
      navigate("/login");
    } catch (error) {
      toastError(error.message);
    }
  };

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      toastSuccess("Logged in Successfully");
      navigate("/");
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

  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setIsAuthenticated(true);
        toastSuccess("Logged in Successfully");
        navigate("/");
      })
      .catch((err) => {
        toastError(err.message);
      });
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
