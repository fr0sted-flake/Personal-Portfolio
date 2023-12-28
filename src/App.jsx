import { useState } from 'react'
import NavBar from './components/NavBar'
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from './components/About';
import Portfolio from './components/Portfolio';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar/>
     <Home/>
     <About/>
     <Portfolio/>

     <SocialLinks/>
    </>
  )
}

export default App
