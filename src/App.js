import React from 'react';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Login from './components/Login'
import Register from './components/Register'
import AddDelivery from './components/AddDelivery'
import Deposit from './components/Deposit'
import UpdateDelivery from './components/UpdateDelivery';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Header />




      <Switch>
      <Route path="/add"> <AddDelivery /> </Route>
      <Route path="/deposit"> <Deposit /> </Route>
      <Route path="/register"> <Register /> </Route>
      <Route path="/login"> <Login /> </Route> 
      <Route path="/update/:id"> <UpdateDelivery /> </Route> 
      <Route path="/"> <Home /> </Route>
      </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
