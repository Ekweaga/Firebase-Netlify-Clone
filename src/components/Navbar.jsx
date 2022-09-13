import React from 'react'

function Navbar() {
  return (
    <div className="w-full absolute z-[50] flex items-center justify-between py-4">
        <div><h1 className="text-red-600 px-2" >MOVELLA</h1></div>
        <div  className='flex gap-2 px-2'>
          <button className="text-white">Sign in </button>
          <button className="bg-red-900 text-white p-1 rounded">Sign up</button>
        </div>
        
      
    </div>
  )
}

export default Navbar
