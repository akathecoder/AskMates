import Router from "next/router";

const linkSendMessage = () => {
  return (
    <div>
      <p>
        Link to reset password has been sent to{" "}
        {Router.query.email}
      </p>
    </div>
  );
};

export default linkSendMessage;
