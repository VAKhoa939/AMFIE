import { Link } from "react-router-dom";

interface Props {
  mainRef: React.RefObject<HTMLElement>;
}

const DashboardPage = (props: Props) => {
  const { mainRef } = props;
  return (
    <main ref={mainRef}>
      <p>Services</p>
      <div className="service-list">
        <Link to="/chat">
          <div className="service-container">
            <p>Asset Management Chat Bot</p>
            <img />
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
    </main>
  );
};

export default DashboardPage;
