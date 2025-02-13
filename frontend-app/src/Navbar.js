import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

function Navbar(){
    return (
        <div className='navbar'>
            <ul>
                <li><Link to="/">Get post</Link></li>
            </ul>
            <ul>
                <li><Link to="/delete">delete post</Link></li>
            </ul>
            <ul>
                <li><Link to="/send">send post</Link></li>
            </ul>
            <ul>
                <li><Link to="/modify">modify post</Link></li>
            </ul>
        </div>
    )
}
export default Navbar;