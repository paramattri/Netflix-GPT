import React from "react";
import netflixLogo from "../images/netflix-logo.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import netflixBgImage from "../images/netflix-background.jpg";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {!user && (
        <img
          className="absolute w-full h-full object-cover opacity-50"
          src={netflixBgImage}
          alt="Background"
        />
      )}
      <div className="px-3 pt-1 z-10 relative flex justify-between items-center">
        <img
          className="w-64 h-24 object-contain"
          src={netflixLogo}
          alt="Logo"
        />
        {user && (
          <div className="flex items-center gap-2">
            <img
              className="w-11 h-11 rounded-[50%]"
              src={user.photoURL}
              alt="user-icon"
            />
            <button
              className="text-red-600 mr-8 text-lg font-bold"
              onClick={handleSignOut}
            >
              (Sign Out)
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
