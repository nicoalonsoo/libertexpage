import axios from "axios";
export const GET_USERS = "GET_USERS";
export const GET_COUNTRIES = "GET_COUNTRIES";
// export const GET_CODE = "GET_CODE";

export const getUsers = (code, page) => {
    return async function(dispatch) {
      try {
        const backData = await axios.get(`/users?code=${code}&page=${page}`);
        const users = backData.data.users;
        dispatch({ type: GET_USERS, payload: users });
      } catch (error) {
        console.log(error);
      }
    };
  };

// export const getCode = (code) => {
//     return async function(dispatch) {
//       try {
//         const response = await axios.get(`/userstable?code=${code}`);
//         const data = response.data;
//         dispatch({ type: GET_CODE, payload: data });
//       } catch (error) {
//         throw new Error('No puedes ingresar a este sitio')
//       }
//     };
//   };


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
