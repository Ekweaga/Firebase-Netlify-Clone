import React,{useState,useContext,useEffect} from 'react'
import bg from "../login.jpg"
import {AuthContext} from "../Context"
import { doc, onSnapshot } from "firebase/firestore";
import {projectfirestore} from "../firebase"
import alt from "../login.jpg"
function Account() {
  const [movies,setMovies] = useState([])
  const {user} = useContext(AuthContext)


  useEffect(()=>{
   
   
    onSnapshot(doc(projectfirestore, "Movieusers", `${user?.email}`), (doc) => {
    
     
      setMovies(doc.data()?.saveShows)
    
  });
  
  },[user?.email])
  console.log(movies)
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


        <div className='text-white grid md:grid-cols-4 grid-cols-1 mt-[100px]'>

          {
            movies.map((movie)=>{
              return (<><div className="flex flex-col items-center justify-content"><img src={movie?.img? `http://image.tmdb.org/t/p/w500/${movie?.img}`: alt} alt={movie?.title}/>
              <div><span>{movie?.title}</span></div></div></>)
            })
          }

        </div>

      
    </>
  )
}

export default Account
