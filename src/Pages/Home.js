import React from 'react'
import img from "../image/img.jpg";
/*import "./Home.css";*/
import Homecon from './Homecon';

export default function Home() {
  return (
    <div style={{ backgroundImage:`url(${img})`,
      backgroundRepeat:"no-repeat",
      backgroundSize:"contain", 
      height:950,
      width:1518}}>
      <Homecon/>
      <h1>Group-03</h1>
    </div>
    

  )
}

export {Home};