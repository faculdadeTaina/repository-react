import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About  from './pages/About/About.jsx'
import Navbar  from './components/navbar/navbar.jsx'
import  Footer  from './components/footer/Footer.jsx'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

export default function App() {
  return (
  
      <div className='App'>
      <BrowserRouter>
       <Navbar/>
      <div className='container'>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/About" element={<About />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />


          </Routes>
          </div>
        <Footer/>
      </BrowserRouter>
   
    </div>
  )
}
