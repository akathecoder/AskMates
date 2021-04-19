import Navbar from "../components/Nav";
import QuestionsListPage from "../components/QuestionsListPage/QuestionsListPage";
import axios from "axios";

export default function Home({ answerData }) {
  return (
    <div className="">
      <Navbar />
      {/* <QuestionsListPage questionData={questionData} /> */}
    </div>
  );
}

// export async function getStaticProps() {
//   const answerData = await axios
//     .get("http://localhost:4001/answers/byusername/nonit_m")
//     .catch((error) => {
//       console.log(error);
//       return;
//     });
//   console.log(answerData);
//   if (answerData === null) {
//     return {
//       props: {
//         answerData: null,
//       },
//     };
//   }
//   return {
//     props: {
//       answerData: JSON.stringify(answerData.data),
//     },
//     revalidate: 1,
//   };
// }
