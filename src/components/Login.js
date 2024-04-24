import { useState, useRef } from "react";
import { getAuthenticationErrorMessage, validateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { USER_AVATAR } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [validationErrorMessage, setValidationErrorMessage] = useState(null);
  const [authenticationErrorMessage, setAuthenticationErrorMessage] =
    useState(null);

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

    if (errorMessage) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
            })
            .catch((error) => {
              setAuthenticationErrorMessage(
                getAuthenticationErrorMessage(error.code, error.message)
              );
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setAuthenticationErrorMessage(
            getAuthenticationErrorMessage(errorCode, errorMessage)
          );
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setAuthenticationErrorMessage(
            getAuthenticationErrorMessage(errorCode, errorMessage)
          );
        });
    }
  };

  return (
    <div className="relative flex justify-center">
      <div className="flex flex-col  md:w-2/6 bg-black/75 px-[68px] pt-[60px] rounded-[4px] mt-32 md:mt-0">
        <p className="text-white mb-7 text-[32px] font-medium">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </p>
        <form className="" onSubmit={handleFormSubmit}>
          {!isSignInForm && (
            <input
              className="w-full px-5 h-[50px] rounded-[4px] mb-4 bg-neutral-700 text-white focus:outline-none"
              type="text"
              placeholder="Full Name"
              ref={name}
            />
          )}
          <input
            className="w-full px-5 h-[50px] rounded-[4px] mb-4 bg-neutral-700 text-white focus:outline-none"
            type="text"
            placeholder="Email"
            ref={email}
          />
          <input
            className="w-full px-5 h-[50px] rounded-[4px] mb-4 bg-neutral-700 text-white focus:outline-none"
            type="password"
            placeholder="Password"
            ref={password}
          />
          <p className="text-red-500 text-sm">
            {authenticationErrorMessage || validationErrorMessage}
          </p>
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
