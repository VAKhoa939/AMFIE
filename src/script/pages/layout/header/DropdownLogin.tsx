import "../../../../css/Header.css";
import { FaUserCircle } from "react-icons/fa";
import { useAuth } from "../../../context/AuthContext";
import { Link } from "react-router-dom";

const DropdownLogin = () => {
  const { logout, user } = useAuth();

  return (
    <>
      {user ? (
        <div className="dropdown">
          <div className="dropdown-btn">
            <FaUserCircle
              style={{
                backgroundColor: "white",
                borderRadius: "50%",
                borderWidth: "0",
              }}
              size={30}
            />
            <p>{user.email}</p>
          </div>
          <ul className="dropdown-menu">
            <li>
              <a href="#">Trang cá nhân</a>
            </li>
            <li>
              <Link to="/login" className="logout-btn" onClick={logout}>
                <p>Đăng xuất</p>
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <Link to="/login" className="login-btn">
          <p>Đăng nhập</p>
        </Link>
      )}
    </>
  );
};

export default DropdownLogin;
