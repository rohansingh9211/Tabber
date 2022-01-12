import React, {useState}from 'react'
import * as FaIcons from "react-icons/fa";
import *as AiIcon from "react-icons/ai"
import { Link } from 'react-router-dom';
import { Sidebardata } from './Sidebardata';
import "./Navbar.css";
import { IconContext } from 'react-icons';
import Login from './Login';
const Navbar = () => {
    const [Sidebar,setsidebar]=useState(false);
    const showsidebar=()=>setsidebar(!Sidebar);
    return (
        <>
        <IconContext.Provider value={{color:"red"}}>    
        <div className='navbar'>
         <Link to="#" className='menu-bars'>
             <FaIcons.FaBars onClick={showsidebar}/> 
         </Link>
         <div className='tabber'><h1>TABBER</h1></div>
         <div className='login'><Login/></div>
        </div>
        
        <nav className={Sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className='nav-menu-items' onClick={showsidebar}>
                <li className='navbar-toggle'>
                <Link to="#" className='menu-bar'>
                <AiIcon.AiOutlineClose/>
                </Link>
                </li>
                {Sidebardata.map((items,index)=>{
                    return(
                            <li key={index} className={items.cName}>
                                <Link to={items.path}>
                                {items.icon}
                                <span>{items.title}</span>
                                </Link>
                            </li>
                    )
                })}
            </ul>
        </nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
