import React, { Component } from 'react';
import img from "../image/img2.jpg";
export default class About extends Component {
  render() {
    return (
       
      <div style={{ backgroundImage:`url(${img})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"contain", 
        height:950,
        width:1518}}>
        <div>
          
        </div>
      </div>
    );
  }
}
