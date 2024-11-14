import { Link } from "react-router-dom";
import "../../css/HomePage.css";
import homepagebg from "../../assets/home-page/homepagebg.webp";
interface Props {
  mainRef: React.RefObject<HTMLElement>;
}

const HomePage = (props: Props) => {
  const { mainRef } = props;
  return (
    <main ref={mainRef}>
      <div className = "bill-board-background">
        <img className="bg-image" src={homepagebg} />
        </div>
        <div>
        <Link to="/dashboard">
        <button className="go-to-dashboard-btn">Go to Dashboard!</button>
        </Link>
        </div>
      
      
    </main>
  );
};

export default HomePage;
