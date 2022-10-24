import React from "react";

const Button = ({ buttonText, reqType, setReqType }) => {
  return (
    <button className="bg-blue-300 rounded-md p-2 shadow-lg font-semibold text-white hover:bg-blue-400" type="button" onClick={() => setReqType(buttonText)}>
      {buttonText}
    </button>
  );
};

export default Button;
