import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useAuth0} from '@auth0/auth0-react' 
import { useEffect } from 'react';

import PostNew from './Components/Admin/postNew'
import NavHeader from './Components/Nav'
import Landing from './Pages/Landing'
import SearchPage from './Pages/SearchPage'
import LoginButton from './Components/LoginButton'
import MyProfile from './Pages/MyProfile'



function App() {
  const {loginWithRedirect, user, isAuthenticated, getAccessTokenWithPopup} = useAuth0()
  const admin = process.env.REACT_APP_ADMIN
  useEffect(() => {

     console.log("USER!!!!", user) 

  })

  return (
    <div className="App">
      <Router>
    
    <NavHeader/>
   
        <Switch>
          <Route exact path="/"> 
            <Landing />
           
          </Route>
          <Route exact path="/admin/postNew">
            { isAuthenticated && user.nickname === admin ?  <PostNew /> : null}
          </Route>
          <Route exact path="/myProfile">
          { isAuthenticated ?  <MyProfile  user= {user}/> : null}

          </Route>
          
          <Route path="/search">
          <SearchPage />
          </Route>
        </Switch>
      
    </Router>
    </div>
  );
}

export default App;
