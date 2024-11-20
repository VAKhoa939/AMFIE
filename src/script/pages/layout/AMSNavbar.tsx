import "../../../css/AMSNavbar.css";
import { useLocation } from "react-router-dom";

interface Props {
  children: JSX.Element;
}

const AMSNavbar = (props: Props) => {
  const location = useLocation();
  const showNavbar = location.pathname === "/ams-dashboard";
  if (showNavbar)
    return (
      <div className="ams-body">
        <nav className="ams-navbar">AMSNavbar</nav>
        {props.children}
      </div>
    );
  return props.children;
};

export default AMSNavbar;
