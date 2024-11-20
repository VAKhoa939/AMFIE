import "../../../../css/Header.css";

const DropdownLanguage = () => {
  return (
    <div className="dropdown">
      <div className="dropdown-btn">
        <p>Ngôn ngữ</p>
      </div>
      <ul className="dropdown-menu">
        <li>
          <a href="#">Tiếng Anh</a>
        </li>
        <li>
          <a href="#">Tiếng Việt</a>
        </li>
      </ul>
    </div>
  );
};

export default DropdownLanguage;
