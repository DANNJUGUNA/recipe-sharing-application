import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import "./topbar.css"
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
                <span className="topbarLink" >Home</span>
                <span className="topbarLink">Recipes</span>
                <span className="topbarLink" >Add Recipes</span>
                <span className="topbarLink" >Ingridients</span>
                <span className="topbarLink" >Add Ingridients</span>
            </div>
            
    </div>
    </div>

  )
}

export default TopBar