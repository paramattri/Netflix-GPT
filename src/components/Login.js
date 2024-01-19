import React from "react";

const Login = () => {
  return (
    <div className="relative flex justify-center">
      <div className="flex flex-col w-2/5 bg-black/75 px-[68px] pt-[60px] rounded-[4px]">
        <p className="text-white mb-7 text-[32px] font-medium">Sign In</p>
        <form className="">
          <input
            className="w-full px-5 pt-4 h-[50px] rounded-[4px] mb-4 bg-neutral-700 text-white focus:outline-none"
            type="text"
            placeholder="Email or phone number"
          />
          <input
            className="w-full px-5 pt-4 h-[50px] rounded-[4px] mb-4 bg-neutral-700 text-white focus:outline-none"
            type="password"
            placeholder="Password"
          />
          <button
            className="w-full p-4 mt-6 mb-4 text-white bg-red-600 rounded-[4px] font-medium"
            type="submit"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
