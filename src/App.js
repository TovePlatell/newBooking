//import logo from './logo.svg';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import {Switch, Route} from 'react-router-dom'
import Header from './components/header/Header';
import Contact from './pages/contact/Contact';
import Offices from './pages/offices/Offices';
import Account from './pages/account/Account';
import Bookings from './pages/bookings/Bookings';
import CurrentUserContext from './context/user-context/UserContext';
import FileUpload from './pages/offices/uploadFile';

const App = () => {
  return(
  <div className='App'>
  <Header/>
  <Switch>
    <Route exact path='/' component={Homepage}/>
    <Route exact path='/contact' component={Contact}/>
    <Route exact path='/offices' component={Offices}/>
    <Route exact path='/account' component={Account}/>
    <Route exact path='/bookings' component={Bookings}/>
  </Switch>
  </div>
)} 

export default App;
