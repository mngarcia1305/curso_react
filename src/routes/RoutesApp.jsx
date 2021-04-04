import React from "react";
import ItemListContainer from '../components/itemlist/ItemListContainer';
import NavBar from '../components/navbar/NavBar.jsx';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ItemDetailContainer from '../components/itemdetail/ItemDetailContainer.jsx';
import Cart from '../components/cart/Cart';

const RoutesApp = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/item/:id?">
            <ItemDetailContainer />
          </Route>
          <Route path="/category/:id?">
            <ItemListContainer />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <ItemListContainer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default RoutesApp;
