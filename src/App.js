import "./App.css";
import Home from "../src/component/Home/Home";
import Sidenav from "../src/component/Sidenav/Sidenav";
function App() {
  return (
    <>
      <div className="row">
        <div className="col s3">
          <Sidenav />
        </div>
        <div className="col s9">
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
