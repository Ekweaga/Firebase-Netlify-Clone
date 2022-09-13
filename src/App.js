

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
    <Row title='Trending' url={requests.trending}/>
    <Row title='Popular' url={requests.latest}/>
    <Row title='Latest'/>
   
      
    </>
  );
}

export default App;
