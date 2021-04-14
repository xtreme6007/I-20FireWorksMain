import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import PostNew from './Components/Admin/postNew'
import NavHeader from './Components/Nav'
import Landing from './Pages/Landing'
import SearchPage from './Pages/SearchPage'




function App() {
  return (
    <div className="App">
      <Router>
    
    <NavHeader/>
   
        <Switch>
          <Route exact path="/"> 
            {/* <Landing /> */}
            <SearchPage />
          </Route>
          <Route exact path="/admin/postNew">
            <PostNew />
          </Route>
          {/* <Route path="/">
            <Home />
          </Route> */}
        </Switch>
      
    </Router>
    </div>
  );
}

export default App;
