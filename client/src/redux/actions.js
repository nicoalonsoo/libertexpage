import axios from "axios";
export const GET_USERS = "GET_USERS";
export const GET_COUNTRIES = "GET_COUNTRIES";

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


  export const getCountries = () => {
    return async function(dispatch) {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      const data = response.data.map(country => ({
        code: country.idd.root,
        suf: country.idd.suffixes,
        name: country.name.common,
        flag: country.flags.svg
      }));
      console.log(response.data);
      dispatch({ type: GET_COUNTRIES, payload: data });
    } catch (error) {
      console.error(error);
    }}
  };
