import axios from "axios";

export async function validateUsername(username) {
  // await new Promise((r) => setTimeout(r, 1000));

  return await axios
    .get(`${process.env.serverUrl}username`, {
      params: {
        username: username,
      },
    })
    .then((res) => {
      if (res.status == 200) {
        console.log(res.data.message);
        if (
          res.data.message ==
          "username does not already exists"
        ) {
          return true;
        } else {
          return false;
        }
      } else if (res.status == 400) {
        return false;
      }
    })
    .catch((err) => {
      if (err.status == 400) {
        return false;
      }
      console.error(err);
    });
}

export async function validateEmail(email) {
  return await axios
    .get(`${process.env.serverUrl}email`, {
      params: {
        email: email,
      },
    })
    .then((res) => {
      if (res.status == 200) {
        console.log(res.data.message);
        if (
          res.data.message ==
          "email does not already exists"
        ) {
          return true;
        } else {
          return false;
        }
      } else if (res.status == 400) {
        return false;
      }
    })
    .catch((err) => {
      if (err.status == 400) {
        return false;
      }
      console.error(err);
    });
}
