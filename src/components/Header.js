import { useEffect } from "react";
import netflixLogo from "../images/netflix-logo.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import netflixBgImage from "../images/netflix-background.jpg";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const unsubsribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubsribe();
  }, []);

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
          <div className="flex items-center gap-4">
            <img className="w-11 h-11 " src={user.photoURL} alt="user-icon" />
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
