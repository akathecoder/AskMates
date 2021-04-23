import axios from "axios";
import Navbar from "../../components/Nav";
import PublicUserProfile from "../../components/UserProfile/Public/PublicUserProfile";
import UserFourZeroFour from "../../components/UserProfile/Public/404";

export default function Home({ userData }) {
  return (
    <>
      <Navbar />
      {userData === null ? (
        <UserFourZeroFour
          message="the USER you are looking for not found !.."
          path={`/`}
          buttonName="HOME"
        />
      ) : userData === "notLoggenIn" ? (
        <UserFourZeroFour
          message="You need to LogIn to see this profile !.."
          path={`/login`}
          buttonName="LOGIN"
        />
      ) : (
        <PublicUserProfile userData={userData} />
      )}
    </>
  );
}

export async function getServerSideProps(ctx) {
  // console.log(params);

  const userData = await axios
    .get(`http://localhost:4001/user`, {
      withCredentials: true,
      params: {
        username: ctx.params.username,
      },
      headers: ctx.req.headers.cookie
        ? { cookie: ctx.req.headers.cookie }
        : undefined,
    })
    .catch((err) => {
      if (err.response.status === 401) {
        return "notLoggenIn";
      } else {
        return null;
      }
    });
  if (userData === null) {
    return {
      props: {
        userData: null,
      },
    };
  }
  if (userData === "notLoggenIn") {
    return {
      props: {
        userData: "notLoggenIn",
      },
    };
  }
  return {
    props: {
      userData: JSON.stringify(userData.data),
    },
  };
}
