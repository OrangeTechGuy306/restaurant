import React, { useState } from 'react'
import "./nav.css"
import { Link } from 'react-router-dom'
import {BiSearch} from "react-icons/bi"
import {GiHamburgerMenu} from "react-icons/gi"



const Navbar = () => {

    const [open, setOpen] = useState(false)
    // const [rotate, setRotate] = useState(false)

    const handleMenu = ()=>{
        setOpen(!open)
    }
  return (
    <div>
        <nav>
        <div className='navContainer'>
            <div className="navLogoContainer">
                <h1>Foodie</h1>
            </div>
            <div className={open ? "openNavLinksContainer" : 'navLinksContainer'}>
                <div className='navLinkContainer'>
                    <Link to="/" className='navLink'>Home</Link>
                </div>
                <div className='navLinkContainer'>
                    <Link to="/" className='navLink'>Menu</Link>
                </div>
                <div className='navLinkContainer'>
                    <Link to="/" className='navLink'>Order</Link>
                </div>
                <div className='navLinkContainer'>
                    <Link to="/" className='navLink'>Blogs</Link>
                </div>
                <div className='navLinkContainer'>
                    <Link to="/" className='navLink'>About us</Link>
                </div>
                <div className='navLinkContainer'>
                    <Link to="/" className='navLink'>Contact us</Link>
                </div>
            </div>
            <div>
                <form>
                    <div className='navSearchContainer'>
                        <input type='search' className='searchInput' placeholder='search for food'/>
                        <BiSearch color='white'/>
                    </div>
                </form>
            </div>


            <GiHamburgerMenu 
            color='gold' 
            className={open ? "rotateMenu" : 'menu'} 
            size={30}
            onClick={handleMenu}
            />



        </div>
        </nav>
    </div>
  )
}

export default  Navbar