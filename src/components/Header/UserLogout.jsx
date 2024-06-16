import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";

function UserLogout() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  return (
    <div className="flex gap-6 items-center">
      <p>Hey, {user.name}</p>
      <button
        className="bg-slate-800 py-1 px-3 rounded-md"
        onClick={() => {
          dispatch(logout());
        }}
      >
        Log-out
      </button>
    </div>
  );
}

export default UserLogout;
