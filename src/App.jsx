
import './App.css'
import Nav from "./Nav"
import Hero from "./Hero"
import {Button} from "./Button"
import Dashboard from './Dashboard'
import Usercard from './Usercard'



function App() {

  return (
    <>
    <Nav />
    <Hero />
    <Button />
    <Dashboard/>
    <div className='text-3xl'>Welcome to React Class</div> 
    <Usercard name="Mabas" age={20} />
    </>
  )
}

export default App
