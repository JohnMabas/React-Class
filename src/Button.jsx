import { useState } from "react";

function Button(){

  // let user = "Mabas"
  let isAtive = true
  let [user, setUser ] = useState('Guest');

  function headleClick(name){
    // user = name;
    // console.log(name)
    isAtive = true

    if(isAtive === true){
    return(
      setUser(name)
      
    )
  }

  }
 
  

  return(
    <>
    <h1>Wlcome {user}</h1>
    <button className='border-2 border-white p-2 w-23 m-auto' onClick={() => {headleClick('John')}}>Sign in</button>


    </>
  )
}

export  {Button}