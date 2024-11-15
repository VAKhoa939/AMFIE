import { Link } from "react-router-dom";
import "../../css/DashBoardPage.css";
import homepagebg from "../../assets/home-page/homepagebg.webp";
interface Props {
  mainRef: React.RefObject<HTMLElement>;
}

const DashboardPage = (props: Props) => {
  const { mainRef } = props;
  return (
    <main ref={mainRef}>
      <h1 className="title">Services</h1>
      <div className="service-list">
        <div className="row">
        <Link to="/chat">
          <div className="service-container">
            <p>Asset Management Chat Bot</p>
            <img className="service-avatar" src={homepagebg} />
          </div>
        </Link>
        <div className="service-container">
          <p>...</p>
          <img />
        </div>
        <div className="service-container">
          <p>...</p>
          <img />
        </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;
