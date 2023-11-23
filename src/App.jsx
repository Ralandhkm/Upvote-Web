import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Purchased from './pages/Purchased'
import Browse from './pages/Browse';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
    <Router>
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path={'/purchased'} element={<Purchased />} />
       <Route path={'/browse'} element={<Browse />} />

     </Routes>
   </Router>
  </div>
  )
}

export default App
