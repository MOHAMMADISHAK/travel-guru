import React, { createContext, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { Container } from '@material-ui/core';
import background from './Image/Rectangle1.png';
import Banner from './Components/Banner/Banner';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login/Login';
import Book from './Components/Book/Book';
import Catalogue from './Components/Catalogue/Catalogue';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser]=useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]} >
  <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${background})` }} className="background">
   <Container >
   <Router>
   <Header></Header>
          <Switch>     
            <Route path="/home">
            <Banner></Banner>
              <Home />           
            </Route>
            <Route path="/book/:title">
              <Book/>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/catalogue/:title">
              <Catalogue></Catalogue>
              </PrivateRoute>
            <Route exact path="/">
              <Banner></Banner>
              <Home />
            </Route>
          </Switch>
      </Router>
    </Container>
    </div>
    </UserContext.Provider>
  );
}

export default App;
