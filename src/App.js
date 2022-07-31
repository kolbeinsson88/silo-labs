import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navigation from "./components/navigation";
import Home from "./components/home";
import Footer from "./components/footer";

function App() {
  
  console.log("For more information on project Silo, such as code and so on, open your console and click \"Sources\" and \"index.js\". ");

  return (
    <div>
      <Navigation />
      <Router>
        <Switch>
            <Route path="/" >
              <Home />
            </Route>
            <Route path="*" component={() => <div><h1>404</h1></div>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
