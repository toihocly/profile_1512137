import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../src/assets/css/bootstrap-grid.min.css";
import "../src/assets/css/bootstrap.min.css";
import CvEN from "../src/layout/CvEN";

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/" render={() => <div>Home</div>} /> */}
        <Route path="/dinhvatuanhai_en" component={CvEN} />
      </Switch>
    </Router>
  );
}

export default App;
