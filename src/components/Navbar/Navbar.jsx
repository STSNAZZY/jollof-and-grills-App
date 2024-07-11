import React, { useState } from 'react'
import './Navbar.css'

import logo from '../Assets/g2.webp'
import cart_icon from '../Assets/cart.jpg'


export const Navbar = () => {

    const [menu,setMenu] = useState('Home')

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img className='logo'src={logo} alt="" />
            <p>JOLLOF&GRILLS</p>
        </div>
        <ul className='nav-menu'>
        <li onClick={()=>{setMenu('Home')}}>Home {menu==='Home'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('Blog')}}>Blog{menu==='Blog'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('Services')}}>Services{menu==='Services'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('Contact')}}>Contact Us{menu==='Contact'?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
            <button>Log in</button>
            <img className='cartIcon'src={cart_icon}alt="" />
        <div className='nav-cart-count'>0</div>
        </div>
    </div>
  )
}
