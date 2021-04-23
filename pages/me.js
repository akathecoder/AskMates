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

export async function getServerSideProps(ctx) {
  const userData = await axios
    .get(
      process.env.serverUrl + "user",
      {
        headers: ctx.req
          ? { cookie: ctx.req.headers.cookie }
          : undefined,
      },
      { withCredentials: true }
    )
    .catch((error) => {
      console.log(error);
      return;
    });

  return {
    props: {
      userData: JSON.stringify(userData.data),
    },
  };
}
