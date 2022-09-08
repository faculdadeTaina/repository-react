import React from 'react';
//import styles from './Modulo.css';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
              
            <nav>
                <NavLink>
                    Mini <span>Blog</span>
                </NavLink>
                <ul>
                    <li>
                    <NavLink to="/">Homi  </NavLink>    
                    </li>
                    <li>
                    <NavLink to="/About">  About  </NavLink>    
                    </li>
                </ul>
           </nav>
     
         
    )
}

export default Navbar;