import AuthProvider from "./context/AuthProvider";
import AppRouter from "./router/AppRouter";
// Toastify
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
