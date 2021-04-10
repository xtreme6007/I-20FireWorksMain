import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PostNew from './Components/Admin/postNew'
import NavHeader from './Components/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
    
    <NavHeader/>
   
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/* <Route exact path="/"> 
            <LandingPage />
          </Route> */}
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
