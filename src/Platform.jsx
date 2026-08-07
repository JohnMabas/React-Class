import { useState } from "react";

function Platform({ Track, image, Descrition }) {
  let [isOpen, setIsopen] = useState(false);

  function open(){
    setIsopen(true)
  }

  function close(){
    setIsopen(false)
  }

  if (!isOpen) {
    return (
      <div className=" border border-amber-50 w-56 p-3 ">
        <h1 className="text-sm"> {Track}</h1>
        <img className="w-40 m-auto" src={image} alt="man" />
        
        <button className="border border-amber-50 p-2" onClick={open}>More info</button>
      </div>
    );

   
  }
  if(isOpen){
    return (
      <div className=" border border-amber-50 w-44 p-3 w-56 ">
        <div>
            <h1> {Track}</h1>
        <img className="w-40 m-auto" src={image} alt="man" />
        <p>
          Decrition: {Descrition}
        </p>
            
        </div>
        <button className="border border-amber-50 p-2" onClick={close}>More info</button>

        
      </div>
    );
  }


  
}

export default Platform;
