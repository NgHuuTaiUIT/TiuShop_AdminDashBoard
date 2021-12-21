const setLogin = mode => {
  return {
    type: "SET_LOGIN",
    payload: mode
  };
};

const getLogin = () => {
  return {
    type: "GET_LOGIN"
  };
};

const exportDefault = {
  setLogin,
  getLogin
};

export default exportDefault;
