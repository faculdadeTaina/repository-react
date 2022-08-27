import './Navbar.css';
import {Link ,NavLink}  from 'react-router-dom';

const Navbar=()=>{
  return (
    <nav>
      {/*nav link */}
       {/* 
     <Link to="/">Home</Link>
      <Link to="/About">Sobre</Link>
      */}
      <NavLink to="/">Home</NavLink>
    {/*  <NavLink to="/" className={({ isActive }) =>
        (isActive ? 'Esta ativo' : 'Nao esta ativo')}>
        Home
      </NavLink>
      */} 
      <NavLink to="/about">
        Sobre
      </NavLink>

    </nav>
  )
}

export default Navbar;