import React from 'react';
import {  NavLink as Link } from "react-router-dom";
import "./topbar.css";
const TopBar = () => {
  return (
    <div className="topbar">
        <div className="topbar-left">
          <div>
            <img src="https://images.unsplash.com/photo-1607637508318-d22cfb4299d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" 
            alt="log" 
            className='topbarimg'/>
            </div>
            <span className="logo">Recipe-Sharing Application</span>
        </div>
        <div className="topbar-right">
            <div className="topbarLinks">
                <Link id='topbarLink' className="btn btn-outline-light text-black" to="/">Home</Link>
                <Link id='topbarLink' className="btn btn-outline-light text-black" to="/recipe">Recipes</Link>
                <Link id='topbarLink' className="btn btn-outline-light text-black" to="/addrecipes">Add Recipes</Link>
                <Link id='topbarLink' className="btn btn-outline-light text-black" to="/ingridients">Ingridients</Link>
                <Link id='topbarLink' className="btn btn-outline-light text-black" to="/addingridients">Add Ingridients</Link>
            </div>
            
    </div>
    </div>

  )
}

export default TopBar