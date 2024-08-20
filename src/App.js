import AuthProvider from "./context/AuthProvider";
import AppRouter from "./router/AppRouter";
// Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
      <ToastContainer autoClose={2000} />
    </div>
  );
}

export default App;
