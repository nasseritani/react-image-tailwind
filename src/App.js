import React from "react";
import "./styles.css";
import "./styles/tailwind-pre-build.css";

import HomePage from "./components/Homepage";
import Card from "./components/Card";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}
