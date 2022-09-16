import {Switch,Route} from "react-router-dom"
import Login from "./components/login";
import {useState,useEffect} from 'react'
import Navbar from './components/Navbar';
import Signup from "./components/signup";
import Home from "./Home";
import { getAuth, onAuthStateChanged } from "firebase/auth";


function App() {
 const [user,setUser]=useState(null)

const auth = getAuth();

useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
  
      setUser(user)
     
      // ...
    } else {
      // User is signed out
      // ...
      return;
    }
  });
  console.log(user)
},[])
  return (
    <>
    <Navbar user={user}/>

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
