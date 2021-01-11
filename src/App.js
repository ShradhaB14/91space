import "./App.css";
import Sidenav from "../src/component/Sidenav/Sidenav";
import { Switch, Route, Redirect } from "react-router-dom";
import PayloadList from "../src/component/PayloadList/PayloadList";
import HistoryList from "./component/HistoryList/HistoryList";
function App() {
  return (
    <>
      <div className="row">
        <div className="col s3">
          <Sidenav />
        </div>
        <div className="col s9">
          <Switch>
            <Route path="/history">
              <HistoryList />
            </Route>
            <Route path="/payload">
              <PayloadList />
            </Route>
            <Redirect to="/history" />
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;
