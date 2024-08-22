import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth";
import { auth } from "../auth/firebase-config";
import { useNavigate } from "react-router-dom";
import { toastError, toastSuccess } from "../helpers/ToastNotify";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const { email, displayName, photoURL } = currentUser;
        setUser({ email, displayName, photoURL });
      } else {
        setUser(false);
      }
    });
  }, []);

  const register = async (registerEmail, registerPassword, displayName) => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      await updateProfile(auth.currentUser, { displayName: displayName });
      toastSuccess("Registered Successfully");
      navigate("/login");
    } catch (error) {
      toastError(error.message);
    }
  };

  const login = async (loginEmail, loginPassword) => {
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      toastSuccess("Logged in Successfully");
      navigate("/movies");
    } catch (error) {
      toastError(error.message);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      toastSuccess("Logged out Successfully");
      navigate("/login");
    } catch (error) {
      toastError(error.message);
    }
  };

  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        toastSuccess("Logged in Successfully");
        navigate("/movies");
      })
      .catch((err) => {
        toastError(err.message);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        register,
        login,
        logout,
        user,
        signInWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
