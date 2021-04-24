import Registration from "../components/Registration";
import Navbar from "../components/Nav";

const registration = () => {
  return (
    <div className="relative h-screen bg-login bg-repeat w-full">
      <Navbar />
      <Registration />
    </div>
  );
};

export default registration;
