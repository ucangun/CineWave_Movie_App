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

  const [registerUserName, setRegisterUserName] = useState("");
  const [registerLastName, setRegisterLastName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [user, setUser] = useState({});

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsAuthenticated(!!currentUser);
      console.log(user);
    });

    return () => unsubscribe();
  }, [user]);

  const register = async () => {
    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  const login = async () => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      toastSuccess("Logged in Successfully");
      navigate("/movies");
      setIsAuthenticated(true);
    } catch (error) {
      toastError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setIsAuthenticated(false);
      toastSuccess("Logged out Successfully");
      navigate("/login");
    } catch (error) {
      toastError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    setLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        setIsAuthenticated(true);
        toastSuccess("Logged in Successfully");
        navigate("/movies");
      })
      .catch((err) => {
        toastError(err.message);
      })
      .finally(() => {
        setLoading(false);
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
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
