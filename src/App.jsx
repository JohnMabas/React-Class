import "./App.css";
import Nav from "./Nav";
import Hero from "./Hero";
import { Button } from "./Button";
import Usercard from "./Usercard";
import Platform from "./Platform";
import img from "/src/assets/man1.png";
import AboutCards from "./AboutCards";
import Content from "./Content";
import Form from "./Form";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <div className="flex justify-center items-center gap-3">
        <Platform Track="Beginner" image={img} Descrition="Welcome to Beginner" />
        <Platform Track="Wed 3" image={img} Descrition="Welocome to Wed 3" />
        <Platform Track="Advanced" image={img} Descrition="Welcome to Advanced" />
      </div>

      <AboutCards />

      <Content />

      <Form />

      {/* <Button /> */}
      {/* <div className='text-3xl'>Welcome to React Class</div>  */}
      {/* <Usercard name="Mabas" age={20} /> */}
    </>
  );
}

export default App;
