import React, { Component, useState } from 'react';
import { MenuItems } from "./MenuItems"
import { ReactComponent as MenuIcon } from "./menu.svg";
import { ReactComponent as CloseMenu } from "./close-menu.svg";
import './NavBar.css'

class NavBar extends Component {
    state = { clicked: false, setClick: false }

    handleClick = () => this.setState({ clicked: !this.state.clicked });
    closeMobileMenu = () => this.setState({ setClick: !this.state.setClick });

    render() {
        return (
            < nav className="NavbarItems" >
                <h1 className="navbar-logo">Georgech3's Blog</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url} onClick={this.closeMobileMenu}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <div className="mobile-menu" onClick={this.handleClick}>
                    {this.clicked ?
                        (<CloseMenu className="mobile-option" />) : (<MenuIcon className="menu-icon" />)}
                </div>
            </nav >
        )
    }
}

export default NavBar