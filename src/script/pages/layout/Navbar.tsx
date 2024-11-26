import "../../../css/Navbar.css";
import { useLocation } from "react-router-dom";

interface Props {
  children: JSX.Element;
}

const Navbar = (props: Props) => {
  const location = useLocation();
  const showNavbar =
    location.pathname !== "/" && location.pathname !== "/login";
  return showNavbar ? (
    <div className="ams-body">
      <nav className="ams-navbar">Navbar</nav>
      {props.children}
    </div>
  ) : (
    <>{props.children}</>
  );
};

export default Navbar;
