import axios from "axios";

const instance = axios.create({
  baseURL: `http://13.211.154.163`,
});

export default {
  Login: (email: string, password: string) =>
    instance({
      method: "POST",
      url: "/login",
      data: {
        email,
        password,
      },
    }),
};
