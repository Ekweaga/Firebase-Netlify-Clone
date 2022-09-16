import React ,{ useEffect,useState} from 'react'
import { requests } from '../url'
import axios from 'axios'
import "./login.css"
import { FcGoogle } from "react-icons/fc";

import { signInWithPopup, GoogleAuthProvider,signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../firebase';
import { useHistory, Link } from "react-router-dom";
function Login() {
    const [movies,setMovies]=useState([])
    const history = useHistory();

 // const [loading,setLoading] = useState(false);
  const [error, seterror] = useState(null)
  const [success, setsuccess] = useState(null)
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')


   const provider = new GoogleAuthProvider();
   const googleSignIn = async()=>{
   await signInWithPopup(auth,provider).then(()=>{
   
    
    history.replace("/")
   })
}
 
  
    const movie = movies[Math.floor(Math.random() * movies.length)]

    const  login = async (e)=>{
        e.preventDefault();
        //setLoading(true)
    
        if(email === "" || !password === "" ){
          seterror("Fields are empty")
          //setLoading(false)
        }
    
       else{
        try{
          await signInWithEmailAndPassword(auth,email,password)
        // setLoading(false)
         history.replace("");
         setsuccess("Welcome to Movella")
         
       }
       catch(err){
         console.log(err)
         seterror(err.message)
       }
    
       }
       
       
      
    
      }
      
    useEffect(()=>{
        axios.get(requests.trending).then((response)=>{
            
            setMovies(response.data.results)
            
        })
      

    },[])
  return (
    <div className='w-full h-screen relative'>
        <img src={`http://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} className="w-full h-full object-cover" alt={movie?.title}/>
        <div className=" absolute left-0 bottom-0 bg-black opacity-60 w-full h-screen"></div>

        <div className="absolute top-[20%] left-[8%] md:left-[35%] bg-black h-[500px] w-[350px]  m-auto text-white form">
           
            <div className="flex items-center flex-col justify-center mt-[80px] w-full">
            {error?(<div className='flex items-center justify-center text-red-600 border border-red-600  w-[300px] p-2'><p>{error}</p></div>):null}
                    {success?(<div className="text-green-300 flex items-center justify-center"><p>{success}</p></div>):null}
            <h2 className="text-white p-3 text-3xl text-left">Sign In</h2>
                <form className="flex flex-col gap-4" onSubmit={login}>
                    <div className="w-full"><input type="email" placeholder="Email" value={email} className='p-2 w-[300px] rounded focus:outline-none text-black'  onChange={(e)=>setEmail(e.target.value)}/></div>
                    <div><input type="password" placeholder="Password" value={password} className='p-2 w-[300px] rounded focus:outline-none text-black'  onChange={(e)=>setPassword(e.target.value)}/></div>
                 
                    <div><button className="bg-red-800 p-2 w-[300px] rounded">Submit</button></div>
                </form>
                <div className="py-2">OR</div>
                <div className="m-3"><button type="submit" className="bg-transparent border p-2 w-[300px] rounded flex items-center justify-center gap-3" onClick={googleSignIn}><FcGoogle/> Sign in With Google</button></div>
                <div className='py-2'>New to <span className="text-red-500">Movella</span> <span>?</span> <Link to="signup">SignUp Now</Link></div>
            </div>

           

        </div>
      
    </div>
  )
}

export default Login
