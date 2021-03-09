import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
    return (
        <div style={{backgroundColor: "black", color: "cyan", textAlign: "center"}}>
            <Link className="btn btn-primary" to="/">Home</Link>
        </div>
    );
};

export default Navbar;