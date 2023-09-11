import { GET_USERS } from "./actions";

const initialState = {
  users: [],
  count: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      const count = action.payload.count
      const rows = action.payload.rows
      return { ...state, users: rows, count: count };
      default:
        return{...state};
  }
};

export default reducer;
