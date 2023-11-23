import axios from "axios";
import { selector } from "recoil";

export const getUserInfoQuery = selector({
  key: "getUserInfoQuery",
  get: async () => {
    try {
      const res = await axios.get("http://3.39.54.196/api/v1/members/900");
      return res.data;
    } catch (err) {
      console.log(err);
    }
  },
});
