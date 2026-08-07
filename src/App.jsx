
import './App.css'
import Nav from "./Nav"
import Hero from "./Hero"
import {Button} from "./Button"
import Dashboard from './Dashboard'
import Usercard from './Usercard'
import Platform from './Platform'
import CardB from './Card-B'
import CardA from './Card-A'
import CardWed3 from './Card-wed3'
import img from "/src/assets/man1.png"



function App() {


  return (
    <>
    <Nav />
    <Hero />
    <div className='flex justify-center items-center gap-3'>
       <Platform Track="Beginner" image={img} Descrition="loprhrhvbgiebvib" />
    <Platform Track="Wed 3" image={img} Descrition="loprhrhvbgiebvib" />
      
    </div>
   

  
    {/* <Button /> */}
    {/* <Dashboard/> */}
    {/* <div className='text-3xl'>Welcome to React Class</div>  */}
    {/* <Usercard name="Mabas" age={20} /> */}
    </>
  )
}

export default App
