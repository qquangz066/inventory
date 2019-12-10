import React, { useEffect } from "react";
import httpInternal from "../httpInternal";

const Test = () => {
  useEffect(() => {}, []);

  return (
    <div>
      <button onClick={() => httpInternal.get("/users/1")}>test</button>
    </div>
  );
};

export default Test;
