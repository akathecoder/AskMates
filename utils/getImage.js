import axios from "axios";
import md5 from "md5";

export function getProfilePicLink(email) {
  return `https://gravatar.com/avatar/${md5(
    email.toLowerCase()
  )}?d=retro&s=256`;
}

export async function getCoverImageLink(email) {
  //   const email = "sparshpc@gmail.com";

  const link = `https://gravatar.com/${md5(
    email.toLowerCase()
  )}.json`;

  const imgLink = await axios
    .get(link)
    .then((res) => {
      return res.data.entry[0].profileBackground.url;
    })
    .catch((err) => {
      return "https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
    });

  console.log(imgLink);

  return imgLink;
}
