
import './App.css';
import { React,Component } from 'react';
import SignUp from './Add';
import SignIn from './Logic';
import {BrowserRouter as Router,Routes,Route,Link }  from 'react-router-dom';

class App extends Component {
  render() {
    return (
      
           <div className="App">
               <Router>
               <p><Link to="/Add">Add</Link></p>
                <p><Link to="/Logic">index</Link></p>
               <Routes>      
            
              <Route exact path = "/Add"    element = {<SignUp/>} ></Route>
              <Route exact path = "/Logic"  element = {<SignIn/>} ></Route>
            
              </Routes>
    </Router>
                
               
          </div>
         
      
   );
  }
}

export default App;
