import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './Components/Navbar';
import Home from './Pages/Home';
import Products from './Pages/Products';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/products" component={Products}/>
         {/* <Route path="/ProductsEdit" component={ ProductsEdit } /> */}
      </Switch>
    </div>
  );
}

export default App;
