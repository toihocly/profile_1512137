import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "../src/assets/css/bootstrap-grid.min.css";
import "../src/assets/css/bootstrap.min.css";
import CvEN from "../src/layout/CvEN";
import CvMobileEN from "./layout/CvMobileEN";
import CvWebEN from "./layout/CvWebEN";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect
            to={{
              pathname: "/frontend/dinhvantuanhai_en",
            }}
          />
        </Route>
        <Route path="/frontend/dinhvantuanhai_en" component={CvEN} />
        <Route path="/web/dinhvantuanhai_en" component={CvWebEN} />
        <Route path="/mobile/dinhvantuanhai_en" component={CvMobileEN} />
      </Switch>
    </Router>
  );
}

export default App;
