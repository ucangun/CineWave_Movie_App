import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import InputField from "./InputField";
import Button from "./Button";

const ResetForm = () => {
  const { resetPassword } = useContext(AuthContext);

  const [email, setEmail] = useState();

  const resetForm = [
    {
      id: "email",
      type: "email",
      placeholder: "usermail@example.com",
      value: email,
      onChange: (e) => setEmail(e.target.value),
    },
  ];

  return (
    <div className="px-4 py-2 sm:py-8">
      <div className="flex flex-col items-center justify-center max-w-xl py-20 mx-auto rounded-lg sm:py-24 bg-slate-600 dark:bg-slate-800">
        <h2 className="mb-8 text-2xl font-semibold tracking-wide ">
          Reset Password
        </h2>
        <div className="flex flex-col gap-2 mb-12 ">
          {resetForm.map((field) => (
            <InputField key={field.id} field={field} />
          ))}
        </div>

        <Button type="small" onClick={() => resetPassword(email)}>
          Reset Password
        </Button>
      </div>
    </div>
  );
};

export default ResetForm;
