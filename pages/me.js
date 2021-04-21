import Navbar from "../components/Nav";
import UserProfilePage from "../components/UserProfile/Private/UserProfilePage";
import axios from "axios";

const userProfile = ({ userData }) => {
  return (
    <div>
      <Navbar />
      <UserProfilePage userData={userData} />
    </div>
  );
};

export default userProfile;

export async function getStaticProps() {
  const userData = await axios
    .get("http://localhost:4001/users/nonit_mittal")
    .catch((error) => {
      console.log(error);
      return;
    });
  return {
    props: {
      userData: JSON.stringify(userData.data),
    },
    revalidate: 1,
  };
}
