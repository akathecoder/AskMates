import Router from "next/router";

const linkSendMessage = () => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <p className="w-full my-auto text-center text-lg">
        Link to reset password has been sent to{" "}
        <span className="font-bold text-xl">
          {Router.query.email}
        </span>
      </p>
    </div>
  );
};

export default linkSendMessage;
