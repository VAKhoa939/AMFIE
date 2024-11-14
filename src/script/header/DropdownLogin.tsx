import "../../css/Header.css";
import userIcon from "../../assets/general/user-icon.png";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const DropdownLogin = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();

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
              <Link
                to="/login"
                className="logout-btn"
                onClick={() => setIsLoggedIn(false)}
              >
                <p>Logout</p>
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <Link to="/login" className="login-btn">
          <p>Login</p>
        </Link>
      )}
    </>
  );
};

export default DropdownLogin;
