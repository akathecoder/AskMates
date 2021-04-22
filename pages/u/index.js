import UserFourZeroFour from "../../components/UserProfile/Public/404";
import Navbar from "../../components/Nav";

export default function () {
  return (
    <div>
      <Navbar />
      <UserFourZeroFour
        message="the USER you are looking for not found !.."
        path={`/`}
        buttonName="HOME"
      />
    </div>
  );
}
