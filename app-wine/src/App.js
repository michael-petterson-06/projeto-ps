import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar';
import Home from './Pages/Home';
import Products from './Pages/Products';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        </Switch>
    </Router>
      
  
  );
}

export default App;
