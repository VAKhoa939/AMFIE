import { useState } from "react";
import "../../css/Header.css";
import userIcon from "../../assets/general/user-icon.png";

const DropdownLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <>
      {isLoggedIn ? (
        <div className="dropdown">
          <div className="dropdown-btn">
            <img src={userIcon} />
            <p>Username</p>
          </div>
          <ul className="dropdown-menu">
            <li>
              <a href="#">Profile</a>
            </li>
            <li>
              <a href="/login" onClick={() => setIsLoggedIn(false)}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      ) : (
        <a className="login-btn" href="/login">
          <p>Login</p>
        </a>
      )}
    </>
  );
};

export default DropdownLogin;
