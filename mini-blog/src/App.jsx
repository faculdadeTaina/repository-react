import './App.css'
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom'
import About  from './pages/About/About.jsx'
import Navbar  from './components/navbar/navbar.jsx'
import  Footer  from './components/footer/Footer.jsx'
import Home from './pages/Home/Home'

export default function App() {
  return (
  
      <div className='App'>
      <BrowserRouter>
        <Navbar/>
      <div className='container'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/About' element={ <About/>} />
          </Routes>
          </div>
        <Footer/>
      </BrowserRouter>
   
    </div>
  )
}
