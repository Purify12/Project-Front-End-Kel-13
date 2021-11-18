import React from "react";
import Loginpage from "./pages/Loginpage";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from "./pages/Home";
import Searchpage from "./pages/Searchpage";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/login">
          <Loginpage/>    
        </Route>
        <Route exact path="/pencarian">
          <Searchpage/>
        </Route>
        <Route exact path="/shop">
          <Shop/>
        </Route>
        <Route exact path="/cart">
          <Cart/>
        </Route>
        </Switch>
   </BrowserRouter>
  )
}

export default App

