import React from "react";
import Loginpage from "./pages/Loginpage";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from "./pages/Home";
import Searchpage from "./pages/Searchpage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Loginpage/>
        </Route>
        <Route exact path="/home">
          <Home/>
        </Route>
        <Route exact path="/pencarian">
          <Searchpage/>
        </Route>
        </Switch>
   </BrowserRouter>
  )
}

export default App

