import Button from "./Button";
import Google from "../assets/images/Google.png";
import InputField from "./InputField";

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
