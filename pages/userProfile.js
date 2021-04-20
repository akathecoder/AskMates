import Navbar from "../components/Nav";
import UserProfilePage from "../components/UserProfile/UserProfilePage";

const userProfile = () => {
  return (
    <div>
      <Navbar />
      {/* <UserProfilePage userData={userData} /> */}
      <UserProfilePage />
    </div>
  );
};

export default userProfile;

// export async function getStaticProps() {
//   const userData = await axios
//     .get("http://localhost:4001/users/nonit_m")
//     .catch((error) => {
//       console.log(error);
//       return;
//     });
//   if (userData === null) {
//     return {
//       props: {
//         userData: null,
//       },
//     };
//   }
//   return {
//     props: {
//       userData: JSON.stringify(userData.data),
//     },
//     revalidate: 1,
//   };
// }
