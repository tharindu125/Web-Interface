import React, { Component } from 'react';
import {Menuitems} from "./Menuitems"

class Navbar extends Component {
    render() {
        return(
            <nav className='Navbaritems'>
                <h1 className='navbar-;ogo'>React</h1>
                <div className='menu-icon'>

                </div>
                <ul>
                    {Menuitems.map((item,Index) => {
                        return (
                    <li><a className={item.cName}></a></li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar