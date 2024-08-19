import Button from "./Button";
import Google from "../assets/images/Google.png";
import InputField from "./InputField";

const SignUpForm = () => {
  const signUpForm = [
    {
      id: "firstname",
      type: "text",
      placeholder: "First Name",
      label: "First Name",
    },
    {
      id: "lastname",
      type: "text",
      placeholder: "Last Name",
      label: "Last Name",
    },
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
        <div className="flex flex-col gap-3 mb-6 ">
          {signUpForm.map((field) => (
            <InputField key={field.id} field={field} />
          ))}
        </div>

        <div className="mt-8 sm:mt-12 flex gap-2 items-center">
          <Button type="small">Register</Button>
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
