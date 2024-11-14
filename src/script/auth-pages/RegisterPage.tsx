import React, { useState } from "react";
import { defaultUser, IUser } from "../interfaces/User";
import uteLogo from "../../assets/general/ute-logo.png";
import { Link } from "react-router-dom";

interface Props {
  mainRef: React.RefObject<HTMLElement>;
}

const RegisterPage = (props: Props) => {
  const { mainRef } = props;
  const [user, setUser] = useState<IUser>(defaultUser);
  const [cPassword, setCPassword] = useState<string>("");

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
            <input className='submit-btn' type='submit' value='Register'/>
              */}
          <Link to="/dashboard">
            <div className="submit-btn">Register</div>
          </Link>
        </form>
      </div>
    </main>
  );
};

export default RegisterPage;
