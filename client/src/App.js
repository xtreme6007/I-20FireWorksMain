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
import { useState, useEffect, useRef } from "react";
import Axios from "axios";
import PostNew from './Components/Admin/postNew'
import NavHeader from './Components/Nav'
import Landing from './Pages/Landing'
import SearchPage from './Pages/SearchPage'
import MyProfile from './Pages/MyProfile'
import Login from './Components/Login'
import Registration from "./Components/Registration"
import ProdView from "./Components/Admin/prodView"

Axios.defaults.withCredentials = true;

function App() {
  const {loginWithRedirect, user, isAuthenticated, getAccessTokenWithPopup} = useAuth0()
  const admin = process.env.REACT_APP_ADMIN
  const [logedInStatus, setLogedInStatus] = useState("")

    useEffect(() => {
        Axios.get("/api/login").then((response)=> {
            if(response.data.LoggedIn == true){
                setLogedInStatus(response.data.User[0].user_name)
            }
        })
      }, []);

  return (
    <div className="App">
      <Router>
    
    <NavHeader/>
   
        <Switch>
          <Route exact path="/"> 
            <Landing />
           
          </Route>
          <Route exact path="/admin/postNew" user={user}>
            { logedInStatus === "Preston_Nichols" ?  <PostNew /> : null}
          </Route>
          <Route exact path="/myProfile">
          { isAuthenticated ?  <MyProfile  user= {user}/> : null}

          </Route>
          <Route exact path="/register">
          <Registration />

          </Route>
          <Route exact path="/admin/viewProd">
          <ProdView />

          </Route>

          <Route exact path="/login">
          <Login />

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
