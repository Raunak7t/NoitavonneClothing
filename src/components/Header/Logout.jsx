import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../features/loginFeature";
import authService from "../../appwrite/auth";
import { toast } from "react-toastify";

function Logout({ setNavOpen }) {
  const dispatch = useDispatch();

  const handleLogout = () => {
    authService
      .logOut()
      .then(() => {
        dispatch(logout());
        toast("Logged out!", {
          position: "top-center",
        });
        setNavOpen(false);
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-center",
        });
      });
  };

  return (
    <li>
      <button
        className={` py-1 px-4 text-lg font-semibold rounded-md`}
        onClick={handleLogout}
      >
        Log Out
      </button>
    </li>
  );
}

export default Logout;
