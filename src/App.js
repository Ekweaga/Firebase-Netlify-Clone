

import Main from './components/main';
import Navbar from './components/Navbar';
import Row from './components/Row';
import {requests} from "./url"

function App() {
  return (
    <>
    <Navbar/>
    <Main/>
    <Row title='Upcoming' url={requests.upcoming}/>
    <Row title="Top-rated" url={requests.toprated}/>
    <Row title='Trending' url={requests.trending}/>
    <Row title="Night movies" url={requests.horror}/>
    <Row title="Vampire" url={requests.comedy}/>
   

   
   
      
    </>
  );
}

export default App;
