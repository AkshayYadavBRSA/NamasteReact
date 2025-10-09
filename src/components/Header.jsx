import { useState } from "react";
import "../../index.css";


const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("login");
  const [logoLoaded, setLogoLoaded] = useState(false); // Track image loading

  const btnchnage = () => {
    setbtnNameReact((prev) => (prev === "login" ? "logout" : "login"));
  };

  return (
    <div className="header">
      <div className="logo-container">
        {!logoLoaded && <div className="shimmer-logo"></div>}

        <img
          className="logo"
          alt="Logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"
          onLoad={() => setLogoLoaded(true)}
          style={{ display: logoLoaded ? "block" : "none" }}
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Bucket</li>
          <button className="login" onClick={btnchnage}>
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
