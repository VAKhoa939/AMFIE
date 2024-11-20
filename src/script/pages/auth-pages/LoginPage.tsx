import "../../../css/AuthPages.css";
import emailIcon from "../../../assets/auth-pages/email-icon.png";
import passwordIcon from "../../../assets/auth-pages/password-icon.png";
import schoolPicture from "../../../assets/auth-pages/school-picture.png";
import uteLogo from "../../../assets/general/ute-logo.png";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useMainRef, useScrollToMain } from "../../context/MainRefContext";

const LoginPage = () => {
  const mainRef = useMainRef();
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  useScrollToMain();

  function handleLogin() {
    setIsLoggedIn(true);
    navigate("/dashboard");
  }

  return (
    <main className="auth-page login-page" ref={mainRef}>
      <div className="picture-section">
        <img src={schoolPicture} />
      </div>
      <div className="auth-section">
        <form method="post" className="auth-form">
          <img className="ute-logo" src={uteLogo} />
          <div className="input-area login-form">
            <img className="email-icon" src={emailIcon} />
            <div className="input-container">
              <p>Email</p>
              <input type="text" name="email" />
            </div>
          </div>
          <div className="input-area login-form">
            <img className="password-icon" src={passwordIcon} />
            <div className="input-container">
              <p>Password</p>
              <input type="password" name="password" />
            </div>
          </div>
          <p>
            Forgot your password? Click <a href="#">here</a>
          </p>
          {/*
          <input className='submit-btn' type='submit' onClick={handleLogin} value='Login'/>
            */}
          <div className="submit-btn" onClick={handleLogin}>
            Login
          </div>
          <p>If you are new, click the button below.</p>
          <Link to="/register">
            <p className="register-btn">Create New Account</p>
          </Link>
        </form>
      </div>
    </main>
  );
};

export default LoginPage;
