import React, { useState } from "react";
import { defaultUser, IUser } from "../../interfaces/User";
import uteLogo from "../../../assets/general/ute-logo.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "../../../css/AuthPages.css";
import { useMainRef, useScrollToMain } from "../../context/MainRefContext";

const RegisterPage = () => {
  const mainRef = useMainRef();
  const [user, setUser] = useState<IUser>(defaultUser);
  const [cPassword, setCPassword] = useState<string>("");
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  useScrollToMain();

  function onChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.name === "confirm-password") {
      setCPassword(event.target.value);
      return;
    }
    setUser((prevUser) => ({
      ...prevUser,
      [event.target.name]: event.target.value,
    }));
  }

  function handleLogin() {
    setIsLoggedIn(true);
    navigate("/dashboard");
  }

  return (
    <main className="auth-page" ref={mainRef}>
      <div className="auth-section">
        <form method="post" className="auth-form">
          <img className="ute-logo" src={uteLogo} />
          <div className="input-area">
            <div className="input-container">
              <p>Name</p>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={(e) => onChangeInput(e)}
              />
            </div>
          </div>
          <div className="input-area">
            <div className="input-container">
              <p>Email</p>
              <input
                type="text"
                name="email"
                value={user.email}
                onChange={(e) => onChangeInput(e)}
              />
            </div>
          </div>
          <div className="input-area">
            <div className="input-container">
              <p>Password</p>
              <input
                type="text"
                name="password"
                value={user.password}
                onChange={(e) => onChangeInput(e)}
              />
            </div>
          </div>
          <div className="input-area">
            <div className="input-container">
              <p>Confirm Password</p>
              <input
                type="text"
                name="confirm-password"
                value={cPassword}
                onChange={(e) => onChangeInput(e)}
              />
            </div>
          </div>
          {/*
            <input className='submit-btn' type='submit' onClick={handleLogin} value='Register'/>
              */}
          <div className="submit-btn" onClick={handleLogin}>
            Register
          </div>
        </form>
      </div>
    </main>
  );
};

export default RegisterPage;
