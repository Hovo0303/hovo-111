import React from 'react'
import Moto from './Moto'
import AutoCar from './AutoCar'
import Home from './Home'
import { Switch, Route } from 'react-router-dom'
import CarDetail from './CarDetail'

const Main = () =>{
    return(
        <div>
          <Switch>
              <Route  path="/" exact component={Home} />
              <Route path="/moto" component={Moto} />
              <Route path="/auto" exact component={AutoCar} />
              <Route path="/auto/:id" component={CarDetail}/>
          </Switch>
        </div>
        
    )
 
}
export default Main
