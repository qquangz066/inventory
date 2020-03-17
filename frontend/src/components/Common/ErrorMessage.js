import React from "react";
const ErrorMessage = ({ errors, name }) => {
  if (!errors[name]) return null;

  return <p className="text-danger">{errors[name].message}</p>;
};

export default ErrorMessage;