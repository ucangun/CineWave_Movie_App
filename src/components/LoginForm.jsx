import React from "react";
import Button from "./Button";
import Google from "../assets/images/Google.png";

const LoginForm = () => {
  const loginForm = [
    {
      id: "email",
      type: "email",
      placeholder: "usermail@example.com",
      label: "E-Mail",
    },
    {
      id: "password",
      type: "password",
      placeholder: "password",
      label: "Password",
    },
  ];

  return (
    <div className="py-2 sm:py-8 px-4">
      <div className="mx-auto max-w-xl py-20 sm:py-24 bg-slate-600 flex flex-col items-center justify-center rounded-lg">
        {loginForm.map((field) => (
          <div key={field.id} className="flex flex-col gap-3 mb-6 ">
            <label htmlFor={field.id} className="label">
              {field.label}
            </label>
            <input
              type={field.type}
              id={field.id}
              placeholder={field.placeholder}
              className="input"
            />
          </div>
        ))}

        <div className="flex items-center gap-16 sm:gap-24 mt-2">
          <p>New to CineWave ?</p>
          <Button type="thin">Sign up now</Button>
        </div>

        <div className="mt-8 sm:mt-12 flex gap-2 items-center">
          <Button type="small">Login</Button>
          <Button type="small">
            Continue with
            <img src={Google} alt="Google Logo" className="inline" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
