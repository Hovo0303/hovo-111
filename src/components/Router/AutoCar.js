import React from 'react'
import { car } from './helpers'
import { Link } from 'react-router-dom'

const AutoCar = () =>{
    return(
        <div>
            <h2>AutoCar</h2>
            <ul>
                {
                    car.all().map(item =>{
                        return(
                            <li key={item.name}>
                                    <Link to={`/auto/${item.name}`}>{item.name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
        
    )
 
}
export default AutoCar
