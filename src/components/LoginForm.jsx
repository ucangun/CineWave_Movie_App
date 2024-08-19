import React from "react";
import Button from "./Button";

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
    <div className="py-36 sm:py-48 px-8">
      <div className="mx-auto max-w-2xl py-20 sm:py-36 bg-slate-600 flex flex-col items-center justify-center rounded-lg">
        {loginForm.map((field) => (
          <div
            key={field.id}
            className="flex flex-col gap-3 mb-6 sm:flex-row sm:items-center sm:gap-4"
          >
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

        <div className="flex items-center gap-16 mt-2 sm:ml-20">
          <p>New to CineWave ?</p>
          <Button type="thin">Sign up now</Button>
        </div>

        <div className="mt-8 sm:mt-12 ">
          <Button type="small">Login</Button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
