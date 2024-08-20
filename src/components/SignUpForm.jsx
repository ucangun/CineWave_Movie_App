import Button from "./Button";
import Google from "../assets/images/Google.png";
import InputField from "./InputField";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const SignUpForm = () => {
  const {
    register,
    registerUserName,
    setRegisterUserName,
    registerLastName,
    setRegisterLastName,
    registerEmail,
    setRegisterEmail,
    registerPassword,
    setRegisterPassword,
  } = useContext(AuthContext);

  const signUpForm = [
    {
      id: "firstname",
      type: "text",
      placeholder: "First Name",
      label: "First Name",
      value: registerUserName,
      onChange: (e) => setRegisterUserName(e.target.value),
    },
    {
      id: "lastname",
      type: "text",
      placeholder: "Last Name",
      label: "Last Name",
      value: registerLastName,
      onChange: (e) => setRegisterLastName(e.target.value),
    },
    {
      id: "email",
      type: "email",
      placeholder: "usermail@example.com",
      label: "E-Mail",
      value: registerEmail,
      onChange: (e) => setRegisterEmail(e.target.value),
    },
    {
      id: "password",
      type: "password",
      placeholder: "password",
      label: "Password",
      value: registerPassword,
      onChange: (e) => setRegisterPassword(e.target.value),
    },
  ];

  return (
    <div className="px-4 py-2 sm:py-8">
      <div className="flex flex-col items-center justify-center max-w-xl py-20 mx-auto rounded-lg sm:py-24 bg-slate-600">
        <div className="flex flex-col gap-3 mb-6 ">
          {signUpForm.map((field) => (
            <InputField
              key={field.id}
              field={field}
              value={field.value}
              onChange={field.onChange}
            />
          ))}
        </div>

        <div className="flex items-center gap-2 mt-8 sm:mt-12">
          <Button type="small" onClick={register}>
            Register
          </Button>
          <Button type="small">
            Continue with
            <img src={Google} alt="Google Logo" className="inline" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
