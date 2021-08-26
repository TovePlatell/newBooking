//import logo from './logo.svg';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import {Switch, Route} from 'react-router-dom'
import Header from './components/header/Header';
import Contact from './pages/contact/Contact';
import Offices from './pages/offices/Offices';
import Account from './pages/account/Account';
import Booking from './components/booking/Booking';
import CurrentUserContext from './context/user-context/UserContext';
import { auth } from './firebase/firebase.utils';
import { useEffect, useState } from 'react';
import FileUpload from './pages/offices/uploadFile';

const App = () => {
  return(
  <div className='App'>
  <CurrentUserContext.Provider>
  <Header/>
  <Switch>
    <Route exact path='/' component={Homepage}/>
    <Route exact path='/contact' component={Contact}/>
    <Route exact path='/offices' component={Offices}/>
    <Route exact path='/account' component={Account}/>
    <Route exact path='/fileupload' component={FileUpload}/>
    <Route exact path='/booking' component={Booking}/>
  </Switch>

  </CurrentUserContext.Provider>
  </div>
)} 

export default App;
