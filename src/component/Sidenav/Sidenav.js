import logo from "../../assets/Logo.webp";
import "./Sidenav.css";
import { NavLink } from "react-router-dom";
const Sidenav = () => {
  return (
    <>
      <ul
        id="slide-out"
        className="sidenav"
        style={{ transform: `translateX(0%)` }}
      >
        <li>
          <div className="user-view logo-pos">
            <div className="background">
              <img src={logo} />
            </div>
          </div>
        </li>
        <li>
          <NavLink to="/history">
            <i className="material-icons">storage</i>History
          </NavLink>
        </li>
        <li>
          <NavLink to="/payload">
            <i className="material-icons">web</i>Payload
          </NavLink>
        </li>
        <li>
          <div className="divider"></div>
        </li>
      </ul>
    </>
  );
};

export default Sidenav;
