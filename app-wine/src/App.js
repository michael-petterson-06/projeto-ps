import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
       
      </Switch>
    </Router>
      
  
  );
}

export default App;
