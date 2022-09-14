import {Switch,Route} from "react-router-dom"
import Login from "./components/login";


import Navbar from './components/Navbar';
import Signup from "./components/signup";
import Home from "./Home";


function App() {
  return (
    <>
    <Navbar/>

    <Switch>
      <Route path="/" exact>
        <Home/>
      </Route>
      <Route path="/login" exact>
        <Login/>
      </Route>
      <Route path="/signup" exact>
        <Signup/>
      </Route>
    </Switch>
   
   

   
   
      
    </>
  );
}

export default App;
