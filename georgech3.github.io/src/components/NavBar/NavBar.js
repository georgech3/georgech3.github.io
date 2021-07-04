import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
import './NavBar.css'

class NavBar extends Component {
    state = { clicked: false }



    render() {
        return (
            < nav className="NavbarItems" >
                <h1 className="navbar-logo">Georgech3's Blog</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav >
        )
    }
}

export default NavBar