// import data from "../../data/questionPageData.json";

export default (req, res) => {
  const data = {
    question: {
      questionId: 1,
      doc: "2021-04-09T01:02:12.000Z",
      views: 3,
      title: "Tell me about yourself.",
      content:
        "The interviewer here is testing your honesty while also identifying whether you’ve got what it takes. Link your strengths to concrete examples and choose weaknesses that you are working on improving. Always keep in mind to discuss attributes that will eventually qualify you for the job?",
      username: "akathecoder",
      slug: "tttttttttt",
    },

    answers: [
      {
        answerId: 1,
        answerBody: "When describing your ",
        correct: "C",
        upVotes: 2,
        downVotes: 1,
        questionId: 2,
        doc: "2021-04-12T18:30:00.000Z",
        username: "raghav",
      },
      {
        answerId: 2,
        answerBody:
          "When describing your strengths, always be accurate. Share your real strengths, not those you think the interviewer wants to hear. Be specific and choose strengths which are relevant and based on the job role requirements. Avoid choosing vague words such as “people skills,” instead say “persuasive communication” or “relationship building.”",
        correct: "I",
        upVotes: 2,
        downVotes: 1,
        questionId: 2,
        doc: "2021-04-12T18:30:00.000Z",
        username: "vineet",
      },
      {
        answerId: 4,
        answerBody:
          "When describing your strengths, always be accurate. Share your real strengths, not those you think the interviewer wants to hear. Be specific and choose strengths which are relevant and based on the job role requirements. Avoid choosing vague words such as “people skills,” instead say “persuasive communication” or “relationship building.”",
        correct: "I",
        upVotes: 2,
        downVotes: 1,
        questionId: 2,
        doc: "2021-04-12T18:30:00.000Z",
        username: "raghav",
      },
      {
        answerId: 5,
        answerBody:
          "When describing your strengths, always be accurate. Share your real strengths, not those you think the interviewer wants to hear. Be specific and choose strengths which are relevant and based on the job role requirements. Avoid choosing vague words such as “people skills,” instead say “persuasive communication” or “relationship building.”",
        correct: "I",
        upVotes: 2,
        downVotes: 1,
        questionId: 2,
        doc: "2021-04-12T18:30:00.000Z",
        username: "nonit",
      },
    ],
  };

  res.status(200).json(data);
};
