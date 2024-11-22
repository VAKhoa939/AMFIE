//import DropdownLanguage from "./DropdownLanguage";
import "../../../../css/Header.css";
import ute from "../../../../assets/header/ute.png";
import DropdownLogin from "./DropdownLogin";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const showUTEFullLogo =
    location.pathname === "/" || location.pathname === "/login";
  return (
    <header>
      <ul className="header-section">
        <li className="nav-btn">
          <Link to="/">
            <p>Trang chủ</p>
          </Link>
        </li>
        <li className="nav-btn">
          <Link to="/dashboard">
            <p>Bảng điều khiển</p>
          </Link>
        </li>
        <li>
          <DropdownLogin />
        </li>
      </ul>
      {showUTEFullLogo && (
        <div className="logo-section">
          <a href="/">
            <img className="ute-img" src={ute} />
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
