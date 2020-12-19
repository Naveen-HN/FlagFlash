import React from "react";
import Header from "./components/Header";
import Flags from "./components/Flags";
import About from "./components/About";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Flags} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
