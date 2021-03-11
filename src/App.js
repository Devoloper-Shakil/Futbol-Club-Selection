
import './App.css';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import TemDetels from './components/TemeDetels/TemDetels';



function App() {
  return (
   <div>
    <Router> 
    <Switch>
    <Route exact path="/">
      <Home></Home>
      </Route>
      <Route path="/idTeam/:idTeam">
       <TemDetels></TemDetels>
      </Route>
    </Switch>
    </Router>
   </div>
        
     
        

  );
}

export default App;
