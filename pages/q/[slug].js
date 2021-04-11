import axios from "axios";
import Footer from "../../components/Footer";
import Navbar from "../../components/Nav";
import QuestionPage from "../../components/Question/QuestionPage";

export default function Home({ slug, data }) {
  // const { slug } = useRouter().query;

  return (
    <>
      <Navbar />
      <QuestionPage slug={slug} data={data} />
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  // console.log(context.params.slug); //gives slug

  const data = await axios.get(
    "http://localhost:3000/api/testDataApi"
  );

  // console.log(data.data);

  return {
    props: {
      slug: context.params.slug,
      data: JSON.stringify(data.data),
    }, // will be passed to the page component as props
  };
}
