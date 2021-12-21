const LoginReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_LOGIN":
      return {
        ...state,
        mode: action.payload
      };
    case "GET_LOGIn":
      return state;

    default:
      return state;
  }
};

export default LoginReducer;
