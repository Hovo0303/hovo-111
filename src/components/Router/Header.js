import React from 'react'
import { Link } from 'react-router-dom';


const Header = () => {
    return(
        <nav>
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/auto">AutoCar</Link></li>
              <li><Link to="/moto">Moto</Link></li>
          </ul>
        </nav>
    )
 
}
export default Header