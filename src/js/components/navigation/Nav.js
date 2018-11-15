import React from "react";
import { NavLink } from 'react-router-dom'

const Nav = () => (
    <div className="nav">
        <NavLink to="/" exact className="nav-item" activeClassName="nav-item-active">
            new list
        </NavLink>
        <NavLink to="/view-lists" className="nav-item" activeClassName="nav-item-active">
            view lists
        </NavLink>
    </div>
)


export default Nav;