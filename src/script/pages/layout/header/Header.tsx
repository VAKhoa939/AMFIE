//import DropdownLanguage from "./DropdownLanguage";
import "../../../../css/Header.css";
import ute from "../../../../assets/header/ute.png";
import DropdownLogin from "./DropdownLogin";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <ul className="nav-section">
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
      <div className="logo-section">
        <a href="/">
          <img className="ute-img" src={ute} />
        </a>
      </div>
    </header>
  );
}

export default Header;
