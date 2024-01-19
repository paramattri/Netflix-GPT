import React from "react";
import netflixLogo from "../images/netflix-logo.png";

const Header = () => {
  return (
    <div className="pl-3 pt-1 z-10 relative">
      <img className="w-64 h-24 object-contain" src={netflixLogo} alt="Logo" />
    </div>
  );
};

export default Header;
