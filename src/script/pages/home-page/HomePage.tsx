import { Link } from "react-router-dom";
import "../../../css/HomePage.css";
import homepagebg from "../../../assets/home-page/homepagebg.png";
import { useMainRef, useScrollToMain } from "../../context/MainRefContext";

const HomePage = () => {
  const mainRef = useMainRef();

  useScrollToMain();

  return (
    <main className="homepage" ref={mainRef}>
      <div className="homepage-content">
        <h1>ĐẠI HỌC SƯ PHẠM KỸ THUẬT TP.HCM</h1>
        <h2>Phần Mềm Quản Lý Tài Sản, Thiết Bị, Dụng Cụ</h2>
        <h2>Khoa Đào Tạo Quốc Tế</h2>
        <Link to="/dashboard" className="go-to-dashboard-btn">
          Đến bảng điều khiển
        </Link>
      </div>
      <img className="bg-image" src={homepagebg} />
    </main>
  );
};

export default HomePage;
