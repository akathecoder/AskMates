import axios from "axios";
import Navbar from "../../components/Nav";
import PublicUserProfile from "../../components/UserProfile/Public/PublicUserProfile";
import UserFourZeroFour from "../../components/UserProfile/Public/404";

export default function Home({ userData }) {
  return (
    <>
      <Navbar />
      {userData === null ? (
        <UserFourZeroFour />
      ) : (
        <PublicUserProfile userData={userData} />
      )}
    </>
  );
}

export async function getServerSideProps({ params }) {
  const userData = await axios
    .get(`http://localhost:4001/users/${params.username}`)
    .catch((err) => {
      return null;
    });
  if (userData === null) {
    return {
      props: {
        userData: null,
      },
    };
  }
  return {
    props: {
      userData: JSON.stringify(userData.data),
    },
  };
}
