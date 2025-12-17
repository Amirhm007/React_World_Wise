import Button from "./Button.jsx";
import React from "react";
import { useNavigate } from "react-router-dom";
function BackButton() {
  const btnBaseClasses =
    "py-2 px-4 rounded-md font-semibold text-sm transition-colors duration-200";
  const btnPrimaryClasses = `${btnBaseClasses} cursor-pointer bg-emerald-500 text-gray-900 hover:bg-emerald-600`;
  const navigate = useNavigate();
  return (
    <Button
      type="back"
      className={btnPrimaryClasses}
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
    >
      &larr; Back
    </Button>
  );
}

export default BackButton;
