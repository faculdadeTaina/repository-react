//import './App.css'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';

export default function App() {
  return (
    <main>
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/About" element={<About/>}/>
      </Routes>
      </BrowserRouter>

    </main>
  )
}
