
import ItemListContainer from './components/ItemListContainer.jsx';
import NavBar from './components/NavBar.jsx';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer.jsx';


function App() {

  return (
    <div>
      <Router>
      <NavBar />
      <Switch>
      <Route path='/item/:id?'>
          <ItemDetailContainer/>
      </Route>
      <Route path='/category/:id?'>
          <ItemListContainer/>
      </Route>
      <Route path='/'>
          <ItemListContainer/>
      </Route>

      </Switch>
      </Router>
    </div>
  );
}

export default App;
