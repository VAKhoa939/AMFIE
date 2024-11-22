import "../../../css/AMSNavbar.css";
import { useLocation } from "react-router-dom";

interface Props {
  children: JSX.Element;
}

const AMSNavbar = (props: Props) => {
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

export default AMSNavbar;
