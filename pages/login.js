import Login from "../components/Login";
import Navbar from "../components/Nav";

const login = () => {
  return (
    <div className="relative h-screen bg-login bg-repeat w-full">
      <Navbar />
      <Login />
    </div>
  );
};

export default login;
