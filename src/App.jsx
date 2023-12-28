import { useState } from 'react'
import NavBar from './components/NavBar'
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar/>
     <Home/>
    </>
  )
}

export default App
