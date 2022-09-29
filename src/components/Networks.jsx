import axios from "axios"
import React,{useEffect} from 'react'
import {requests} from "../url"

function Networks() {

 

  //const movie = casts[Math.floor(Math.random() * casts.length)]
  useEffect(()=>{
setInterval(()=>{
  axios.get(requests.tv1).then((response)=>{
         
      console.log(response)
      
  })
},3000)
      

  },[])
  return (
    <div>Networks</div>
  )
}

export default Networks