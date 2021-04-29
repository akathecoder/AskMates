import Router from "next/router";
import { useState, useEffect } from "react";

const linkSendMessage = () => {
  const [email, setEmail] = useState();
  useEffect(() => {
    setEmail(Router.query.email);
  }, []);
  return (
    <div className="h-screen w-screen flex flex-col">
      <p className="w-full my-auto text-center text-lg">
        Link to reset password has been sent to{" "}
        <span className="font-bold text-xl">{email}</span>
      </p>
    </div>
  );
};

export default linkSendMessage;
