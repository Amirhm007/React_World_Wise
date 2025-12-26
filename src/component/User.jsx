import { useAuth } from "../contexts/FakeAtuthContext";
import React, { use } from "react";
import { useNavigate } from "react-router-dom";
function User() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  if (!user) return null;
  function handleClick() {
    logout();
    navigate("/");
  }

  return (
    <div className="absolute top-[4.2rem] right-[4.2rem] bg-[#2d3439] p-[1rem_1.4rem] rounded-[7px] z-[999] shadow-[0_0.8rem_2.4rem_rgba(36,42,46,0.5)] text-[1.6rem] font-semibold flex items-center gap-[1.6rem] text-inherit">
      <img
        className="rounded-full h-[4rem]"
        src={user.avatar}
        alt={user.name}
      />
      <span>Welcome, {user.name}</span>
      <button
        onClick={handleClick}
        className="bg-[#42484d] rounded-[7px] border-none py-[0.6rem] px-[1.2rem] text-inherit font-inherit text-[1.2rem] font-bold uppercase cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
}

export default User;
