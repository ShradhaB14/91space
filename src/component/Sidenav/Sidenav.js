import logo from "../../assets/Logo.webp";
import "./Sidenav.css";
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
          <a href="#!">
            <i className="material-icons">storage</i>History
          </a>
        </li>
        <li>
          <a href="#!">
            <i className="material-icons">web</i>Payload
          </a>
        </li>
        <li>
          <div className="divider"></div>
        </li>
      </ul>
      {/* <a data-target="slide-out" className="sidenav-trigger">
        <i className="material-icons">menu</i>
      </a> */}
    </>
  );
};

export default Sidenav;
