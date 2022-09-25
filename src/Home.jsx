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
    <Row title="Comedy" id="6" url={requests.comedies}/>
    <Row title="Cartoon" id="7" url={requests.cartoon}/>
    <Row title="Pirates" id="8" url={requests.pirate}/>
    <Row title="Hero" id="9" url={requests.hero}/>
    <Row title="Marvel" id="10" url={requests.marvel}/>
    <Row title="Drama" id="11" url={requests.drama}/>
    <Row title="Fictions" id="12" url={requests.fiction}/>
    <Row title="Fantasy" id="13" url={requests.fantasy}/>
    <Row title="Western" id="14" url={requests.western}/>
    <Row title="Adventures" id="15" url={requests.adventure}/>
    <Row title="Nollywood" id="16" url={requests.nigeria}/>
    </>
  )
}

export default Home
