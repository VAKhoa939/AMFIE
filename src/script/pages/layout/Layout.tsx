import AMSNavbar from "./AMSNavbar";
import Header from "./header/Header";
import "../../../css/general.css";

interface Props {
  children: JSX.Element;
}

const Layout = (props: Props) => {
  return (
    <>
      <Header />
      <AMSNavbar children={props.children} />
    </>
  );
};

export default Layout;
