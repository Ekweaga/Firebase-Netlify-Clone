import React,{useState,useContext,useEffect} from 'react'
import bg from "../login.jpg"
import {AuthContext} from "../Context"
import { doc, onSnapshot,updateDoc } from "firebase/firestore";
import {projectfirestore} from "../firebase"
import alt from "../login.jpg"

import axios from 'axios'
import {FcStart} from "react-icons/fc"

function Account() {
  const [movies,setMovies] = useState([])
  const [videourl,setVideourl] = useState('')
  const [show,setshow] = useState(false)
  const {user} = useContext(AuthContext)
  


  const deletemovie = async (id)=>{
    const results = movies.filter((item)=>item.id !== id)

   

    await updateDoc(doc(projectfirestore, "Movieusers", `${user?.email}`),{
      saveShows:results
    })


  }

  const getmovie = (id) =>{
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=8b202e3aa9ae4600acd6c448e326badd&language=en-US`).then((response)=>{
      console.log(response.data.results[0].key)
      setVideourl(response.data.results[0].key)
      setshow(!show)
    })
  }


  useEffect(()=>{
   
   
    onSnapshot(doc(projectfirestore, "Movieusers", `${user?.email}`), (doc) => {
    
     
      setMovies(doc.data()?.saveShows)
    
  });
  
  
  },[user?.email])
 
  return (
    <>
    <div className="w-full h-[500px] relative text-white">
        <div className="w-full h-full">
        <div className="w-full h-[500px] bg-black opacity-50 absolute top-0 left-0 object-cover"></div>
            <div className="w-full h-[600px] absolute top-0 left-0 object-cover"></div>
            <img src={bg} className="w-full h-full object-cover" alt={bg}/>
        </div>
     <div className="absolute text-white top-[60%] left-[10%]"><h1 className="text-3xl md:text-5xl mb-2 font-bold">Your Account</h1>
     <p className="text-[20px]">Saved Movies</p>
     </div>
        </div>


    { movies.length === 0 ? <div className="mt-[100px] flex items-center justify-center">No movies on your account</div>: <div className='text-white grid md:grid-cols-4 grid-cols-1 mt-[100px]'>



          {
            movies.map((movie)=>{
              return (<><div className="flex flex-col items-center justify-content relative"><img src={movie?.img? `http://image.tmdb.org/t/p/w500/${movie?.img}`: alt} alt={movie?.title}/>
              <div><span>{movie?.title}</span></div>
              <span className="absolute top-4 right-4 cursor-pointer" onClick={()=>deletemovie(movie?.id)}>X</span>
              <span className="absolute top-[30%] left-[40%] cursor-pointer " onClick={()=>getmovie(movie?.id)}><FcStart size = {50}/></span>
              </div></>)
            })}
          

        </div>}

      {
        show ?( <div className="absolute top-0 bottom-0 flex items-center justify-center w-full h-screen bg-black z-10">
        <iframe src={`http://www.youtube.com/embed/${videourl ? videourl :null}?enablejsapi=1&origin=http://example.com`} frameborder="0" title="video"  className="w-full h-full"></iframe>
        <span className="fixed top-[40px] right-4 cursor-pointer text-3xl z-40 text-white" onClick={()=>setshow(false)}>X</span>
      </div>) :null
      } 

        


       

      
    </>
  )
}

export default Account
