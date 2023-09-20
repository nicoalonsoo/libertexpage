import axios from "axios";
export const GET_USERS = "GET_USERS";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const UPDATE_FILTERED_USERS = 'UPDATE_FILTERED_USERS';

export const getUsers = (code, page, search) => {
    return async function(dispatch) {
      try {
        const queryParams = `code=${code}&page=${page}${search ? `&search=${search}` : ''}`;
        const backData = await axios.get(`/users?${queryParams}`);
        const users = backData.data.users;
        dispatch({ type: GET_USERS, payload: users });
      } catch (error) {
        console.log(error);
      }
    };
  };

  export const updateFilteredUsers = (filteredUsers) => {
    return {
      type: UPDATE_FILTERED_USERS,
      payload: filteredUsers,
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
        flag: country.flags.svg,
        continent: country.continents[0]
      }));
      console.log(data);
      dispatch({ type: GET_COUNTRIES, payload: data });
    } catch (error) {
      console.error(error);
    }}
  };
