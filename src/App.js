import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Example from "./Pages/Example";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={"/"} component={() => <Example />} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
