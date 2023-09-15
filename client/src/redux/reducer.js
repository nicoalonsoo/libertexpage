import { GET_USERS, GET_COUNTRIES} from "./actions";

const initialState = {
  users: [],
  count: 0,
  countries: [],
  accessCode: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      const count = action.payload.count
      const rows = action.payload.rows
      return { ...state, users: rows, count: count };
    case GET_COUNTRIES:
      const modifiedCountries = action.payload.map(country => {
        // Verifica si 'suf' es un array con un solo elemento
        if (Array.isArray(country.suf) && country.suf.length === 1) {
          // Concatena 'code' y el único elemento en 'suf'
          return {
            ...country,
            code: `${country.code}${country.suf[0]}`,
          };
        }
        // Si 'suf' no es un array o tiene más de un elemento, no lo modifiques
        return country;
      });
      return{...state, countries: modifiedCountries}
    // case GET_CODE:
    //   return {
    //     ...state,
    //     accessCode: action.payload,
    //   };
      default:
        return{...state};
  }
};

export default reducer;
