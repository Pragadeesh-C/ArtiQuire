import { useNavigate, Link, useLocation } from "react-router-dom";
import "../../Styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faDownload,
  faReceipt,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(true);
  const [active, setActive] = useState(0);
  const [isLogged, setIsLogged] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();


  const logOut = async () => {
  };

  return (
    <>
      {isVisible && (
        <nav className={`nav ${isActive ? "active" : ""}`}>
          <div className={"burgerAct"} onClick={() => setIsActive(!isActive)}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <div className={`navBody ${isActive ? "active" : ""}`}>
            {/* <img src="" alt="logo here" /> */}
            <ul className="navlinks">
              <li>
                <Link
                  className={`navlink ${active === 0 ? "active" : ""}`}
                  onClick={() => setActive(0)}
                  to="/dashboard"
                >
                  <FontAwesomeIcon className="navIcon" icon={faHouse} />{" "}
                  {isActive ? <p>Dashboard</p> : <p></p>}
                </Link>
              </li>
              <li>
                <Link
                  className={`navlink ${active === 1 ? "active" : ""}`}
                  onClick={() => setActive(1)}
                  to="/add"
                >
                  <FontAwesomeIcon className="navIcon" icon={faDownload} />{" "}
                  {isActive ? <p>Add new Stock</p> : <p></p>}
                </Link>
              </li>
              <li>
                <Link
                  className={`navlink ${active === 2 ? "active" : ""}`}
                  onClick={() => setActive(2)}
                  to="/report"
                >
                  <FontAwesomeIcon className="navIcon" icon={faReceipt} />
                  {isActive ? <p>Report</p> : <p></p>}
                </Link>
              </li>
              <li onClick={logOut}>
                <Link
                  className={`navlink ${active === 3 ? "active" : ""}`}
                  onClick={() => setActive(3)}
                >
                  <FontAwesomeIcon className="navIcon" icon={faSignOut} />
                  {isActive ? <p>Logout</p> : <p></p>}
                </Link>
              </li>
              {/* <li>
            <Link to="/settings" />
          </li> */}
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;