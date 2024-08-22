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

  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const { email, displayName, photoURL } = currentUser;
        setUser(email, displayName, photoURL);
        setIsAuthenticated(!!currentUser);
      } else {
        setUser(false);
      }
    });
  }, []);

  const register = async (registerEmail, registerPassword, displayName) => {
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

  const login = async (loginEmail, loginPassword) => {
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
