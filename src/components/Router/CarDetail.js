import React from 'react'
import { car } from './helpers'
const CarDetail = (props) => {
    const carId = props.match.params.id;
    const data =car.getCarId(carId)

    console.log(data)
    return(
        <div>
          <h2>Detail</h2>
        </div>
    )
}
export default CarDetail