import "../../../css/Navbar.css";
import { useLocation } from "react-router-dom";

interface Props {
  children: JSX.Element;
}

const Navbar = (props: Props) => {
  const location = useLocation();
  const showNavbar =
    location.pathname === "/dashboard" ||
    location.pathname === "/dashboard/create-asset" ||
    location.pathname === "/dashboard/:assetId";
  return showNavbar ? (
    <div className="ams-body">
      <nav className="ams-navbar">AMSNavbar</nav>
      {props.children}
    </div>
  ) : (
    <>{props.children}</>
  );
};

export default Navbar;
