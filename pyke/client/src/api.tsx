import axios from "axios";

export default {
  user: {
    currentUser: async () => {
      const response = await axios.get("/api/auth/current_user");
      console.log("axios resp", response);
      const user = response.data.user;
      return user;
    }
  }
};
