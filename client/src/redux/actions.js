import axios from "axios";
export const GET_USERS = "GET_USERS";

export const getUsers = (page) => {
    return async function(dispatch) {
      try {
        const backData = await axios.get(`/users?page=${page}`);
        const users = backData.data.users;
        dispatch({ type: GET_USERS, payload: users });
      } catch (error) {
        console.log(error);
      }
    };
  };
