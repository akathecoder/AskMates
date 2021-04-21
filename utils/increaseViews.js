import axios from "axios";

export default async function increaseViews(slug) {
  axios
    .patch(process.env.serverUrl + "question", {
      slug: slug,
    })
    .catch((err) => {
      console.error(err);
    });
}
