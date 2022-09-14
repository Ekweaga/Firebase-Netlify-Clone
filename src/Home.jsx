import React from 'react'
import Row from './components/Row';
import Main from './components/main';
import {requests} from "./url"

function Home() {
  return (
    <>
       <Main/>
    <Row title='Upcoming' id="1" url={requests.upcoming}/>
    <Row title="Top-rated" id="2" url={requests.toprated}/>
    <Row title='Trending' id="3" url={requests.trending}/>
    <Row title="Night movies" id="4" url={requests.horror}/>
    <Row title="Vampire" id="5" url={requests.comedy}/>
    </>
  )
}

export default Home
