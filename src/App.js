import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navigation from "./components/navigation";
import Home from "./components/home";

function App() {
  return (
    <div>
      <Navigation />
      <Router>
        <Switch>
            <Route path="/" >
              <Home />
            </Route>
            <Route path="*" component={() => <div>404</div>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
