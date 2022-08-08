import React from "react";

import Navigation from "./components/navigation";
import Home from "./components/home";

function App() {
  console.log("For more information on project Silo, such as code and so on, open your console and click \"Sources\" and \"index.js\". ");

  return (
    <React.Fragment>
      <Navigation />
      <Home />
    </React.Fragment>
  );
};

export default App;
