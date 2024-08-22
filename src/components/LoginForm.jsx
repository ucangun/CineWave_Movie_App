import Button from "./Button";
import Google from "../assets/images/Google.png";
import InputField from "./InputField";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const LoginForm = () => {
  const { login, signInWithGoogle } = useContext(AuthContext);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const loginForm = [
    {
      id: "email",
      type: "email",
      placeholder: "usermail@example.com",
      label: "E-Mail",
      value: loginEmail,
      onChange: (e) => setLoginEmail(e.target.value),
    },
    {
      id: "password",
      type: "password",
      placeholder: "password",
      label: "Password",
      value: loginPassword,
      onChange: (e) => setLoginPassword(e.target.value),
    },
  ];

  return (
    <div className="px-4 py-2 sm:py-8">
      <div className="flex flex-col items-center justify-center max-w-xl py-20 mx-auto rounded-lg sm:py-24 bg-slate-600 dark:bg-slate-800">
        <div className="flex flex-col gap-3 mb-6 ">
          {loginForm.map((field) => (
            <InputField key={field.id} field={field} />
          ))}
        </div>

        <div className="flex items-center gap-24 mt-2">
          <p>New to CineWave ?</p>
          <Button type="thin" to="/signup">
            Sign up now
          </Button>
        </div>

        <div className="flex items-center gap-2 mt-8 sm:mt-12">
          <Button type="small" onClick={() => login(loginEmail, loginPassword)}>
            Login
          </Button>
          <Button type="small" onClick={signInWithGoogle}>
            Continue with
            <img src={Google} alt="Google Logo" className="inline" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
