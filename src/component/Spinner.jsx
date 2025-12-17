import React from "react";

function Spinner() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="w-24 h-24 rounded-full custom-spinner-design animate-rotate-custom"></div>
    </div>
  );
}

export default Spinner;
