import "./App.css";
import Sidenav from "../src/component/Sidenav/Sidenav";
import { Switch, Route } from "react-router-dom";
import Payload from "../src/component/Payload/Payload";
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
              {/* <HistoryComponent history={history} /> */}
              <HistoryList />
            </Route>
            <Route path="/payload">
              <Payload />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;
