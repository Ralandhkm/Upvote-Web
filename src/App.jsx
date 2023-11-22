import { useState } from 'react'
import reactLogo from './assets/react.svg'
import logos from '/logos.png'
import './App.css'
import Footer from './component/Footer'
import Bar from './component/Bar'
import Home from './pages/Home'
import Kart from './component/Kart'
import Purchased from './pages/Purchased'


function App() {
  const [count, setCount] = useState(0)

  return <div>
    {/* <Home/> */}
    {/* <Kart/> */}
    <Purchased/>
  </div>
}

export default App
