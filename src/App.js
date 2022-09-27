import {Switch,Route} from "react-router-dom"
import Login from "./components/login";
import {useState,useEffect} from 'react'
import Navbar from './components/Navbar';
import Signup from "./components/signup";
import Home from "./Home";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Account from "./components/Account";
import Movies from "./components/Movies";
import Search from "./components/Search";
import Casts from "./components/Casts";


function App() {
 const [user,setUser]=useState(null)

const auth = getAuth();

useEffect(()=>{
  onAuthStateChanged(auth, (currentUser) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
  
      setUser(currentUser)
     
      // ...
    } else {
      // User is signed out
      // ...
      return;
    }
  });
  console.log(user)
},[user,auth])
  return (
    <>
    <Navbar />

    <Switch>
      <Route path="/" exact>
        <Home/>
      </Route>
      <Route path="/login" exact>
        <Login/>
      </Route>
      <Route path="/signup" exact >
        <Signup />
      </Route>
      <Route path="/account" exact>
        <Account/>
      </Route>
      <Route path="/m" exact><Movies user={user}/></Route>
      <Route path="/search" exact >
        <Search/>
      </Route>
      <Route path="/casts" exact >
        <Casts/>
      </Route>
    </Switch>
   
   

   
   
      
    </>
  );
}

export default App;
