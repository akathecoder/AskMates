import axios from "axios";

export async function voteUp(answerId, votes, setVotes) {
  axios
    .patch(
      process.env.serverUrl + "answers/upvote/" + answerId,
      {},
      {
        withCredentials: true,
      }
    )
    .then(setVotes([votes[0] + 1, votes[1]]))
    .catch((err) => console.error(err));
}

export async function voteDown(answerId, votes, setVotes) {
  axios
    .patch(
      process.env.serverUrl +
        "answers/downvote/" +
        answerId,
      {},
      {
        withCredentials: true,
      }
    )
    .then(setVotes([votes[0], votes[1] + 1]))
    .catch((err) => console.error(err));
}
