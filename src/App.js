import React, { useEffect, useState } from "react";
import Landing from "./Pages/Landing/Landing";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Projects from "./Pages/Projects/Projects";
import Notes from "./Pages/Notes/Notes";

import backgrounds from "./backgrounds";

function App() {
  const [background, setBackground] = useState();

  useEffect(() => {
    const index = Math.floor(Math.random() * 8);
    setBackground(backgrounds[index]);
  }, []);

  useEffect(() => {
    document.body.style.background = `url(${background})`;
  }, [background]);

  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/notes" exact component={Notes} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
