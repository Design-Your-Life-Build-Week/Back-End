import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from './components/Register'
import Login from './components/Login'
import Categories from './components/Category.js'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Route path="/register" component={User}/>
      <Route path="/login" component={Login}/>
      <Route path="/categories" component={Categories}/>
      
    </div>
    </Router>
  );
}

export default App;
