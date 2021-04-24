import Navbar from "../components/Nav";
import UserProfilePage from "../components/UserProfile/Private/UserProfilePage";
import UserFourZeroFour from "../components/UserProfile/Public/404";
import axios from "axios";

const userProfile = ({ userData }) => {
  return (
    <div>
      <Navbar />
      {userData === "notLoggedIn" || userData === null ? (
        <UserFourZeroFour
          message="You need to LogIn to see your Profile !.."
          path={`/login`}
          buttonName="LOGIN"
        />
      ) : (
        <UserProfilePage userData={userData} />
      )}
    </div>
  );
};

export default userProfile;

export async function getServerSideProps(ctx) {
  const userData = await axios
    .get(process.env.serverUrl + "user", {
      withCredentials: true,
      headers: ctx.req.headers.cookie
        ? { cookie: ctx.req.headers.cookie }
        : undefined,
    })
    .catch((error) => {
      console.log(error);
      if (error.response.status === 401) {
        return "notLoggedIn";
      }
      console.log(error.response);
      return null;
    });
  if (userData === "notLoggedIn" || userData === null) {
    return {
      props: {
        userData: "notLoggedIn",
      },
    };
  }
  return {
    props: {
      userData: JSON.stringify(userData.data),
    },
  };
}
