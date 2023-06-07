// File axios.ts
import axios from "axios";

const instance = axios.create({
  baseURL: `http://13.211.154.163`,
});

interface LoginResponse {}

export default {
  Login: (username: string, password: string): Promise<LoginResponse> =>
    instance({
      method: "POST",
      url: "/login",
      data: {
        username,
        password,
      },
    }),
};