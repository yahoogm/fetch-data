import React from "react";
import Button from "./Button";

const Form = ({ reqType, setReqType }) => {
  return (
    <form onSubmit={(e) => e.preventDefault} className="space-x-2 text-center bg-gray-300 p-2">
      <Button buttonText="users" reqType={reqType} setReqType={setReqType} />
      <Button buttonText="posts" reqType={reqType} setReqType={setReqType} />
      <Button buttonText="comments" reqType={reqType} setReqType={setReqType} />
    </form>
  );
};

export default Form;
