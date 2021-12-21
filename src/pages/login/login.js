import React, { useEffect, useRef, useState } from "react";
// import ReactDOM from "react-dom";
import "./style.css";
import logo from "../../assets/images/logo.png";
import LoginActions from "../../redux/actions/LoginActions";
import { useDispatch } from "react-redux";
const Login = () => {
  const link = "# ";
  const username = useRef(null);
  const password = useRef(null);
  const [isLogin, setIsLogin] = useState(false);
  const handleLogin = () => {
    if (
      username.current.value === "admin" &&
      password.current.value === "admin"
    ) {
      setIsLogin(true);
      // dispatch(LoginActions.setLogin(true));
    }
  };
  const dispatch = useDispatch();
  // console.log(dispatch(LoginActions.getLogin()));
  let style = {
    display: "block"
  };
  if (isLogin) {
    style = {
      display: "none"
    };
  }
  // useEffect(() => {
  //   dispatch(LoginActions.setLogin(false));
  // }, []);

  return (
    <div style={style}>
      <section
        className="login-page"
        style={{ position: "absolute", inset: 0, zIndex: 99 }}>
        <div className="login-wrapper">
          <div className="form">
            <img src={logo} alt="Logo" />
            <h1>TiuShop Management</h1>
            <div className="input-group">
              <input
                ref={username}
                type="text"
                name="loginUser"
                id="loginUser"
                required
                maxLength={100}
                autoFocus
              />
              <label htmlFor="loginUser">
                <i className="fas fa-user" /> Username
              </label>
            </div>
            <div className="input-group">
              <input
                ref={password}
                type="password"
                name="loginPassword"
                id="loginPassword"
                required
                maxLength={100}
              />
              <label htmlFor="loginPassword">
                <i className="fas fa-lock" /> Password
              </label>
            </div>
            <input
              type="submit"
              defaultValue="Login"
              className="submit-btn"
              onClick={handleLogin}
            />
            <br />
            <br />
            <a href="#forgot-password" className="forgot-password">
              Forgot Password?
            </a>
          </div>
          <div id="forgot-password">
            <form className="form">
              <a href={link} className="close">
                ×
              </a>
              <h1>Reset Password</h1>
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  maxLength={100}
                  autoComplete="off"
                />
                <label htmlFor="email">
                  <i className="fas fa-envelope" /> Email
                </label>
              </div>
              <input
                type="submit"
                defaultValue="Submit"
                className="submit-btn"
              />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Login;
