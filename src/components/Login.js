import { useState, useRef } from "react";
import { validateData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [validationErrorMessage, setValidationErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const errorMessage = validateData(
      email.current.value,
      password.current.value
    );
    setValidationErrorMessage(errorMessage);
  };

  return (
    <div className="relative flex justify-center">
      <div className="flex flex-col w-2/6 bg-black/75 px-[68px] pt-[60px] rounded-[4px]">
        <p className="text-white mb-7 text-[32px] font-medium">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </p>
        <form className="" onSubmit={handleFormSubmit}>
          {!isSignInForm && (
            <input
              className="w-full px-5 pt-4 h-[50px] rounded-[4px] mb-4 bg-neutral-700 text-white focus:outline-none"
              type="text"
              placeholder="Full Name"
              ref={name}
            />
          )}
          <input
            className="w-full px-5 pt-4 h-[50px] rounded-[4px] mb-4 bg-neutral-700 text-white focus:outline-none"
            type="text"
            placeholder="Email"
            ref={email}
          />
          <input
            className="w-full px-5 pt-4 h-[50px] rounded-[4px] mb-4 bg-neutral-700 text-white focus:outline-none"
            type="password"
            placeholder="Password"
            ref={password}
          />
          <p className="text-red-500 text-sm">{validationErrorMessage}</p>
          <button
            className="w-full p-4 mt-6 mb-4 text-white bg-red-600 rounded-[4px] font-medium"
            type="submit"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
        </form>
        {isSignInForm ? (
          <p className="mt-4  mb-3 text-neutral-500">
            New to Netflix? {""}
            <span
              className="text-white cursor-pointer"
              onClick={toggleSignInForm}
            >
              Sign up now.
            </span>
          </p>
        ) : (
          <p className="mt-4  mb-3 text-neutral-500">
            Already registered? {""}
            <span
              className="text-white cursor-pointer"
              onClick={toggleSignInForm}
            >
              Sign in now.
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
