import React, { useContext, useRef, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/nav_dropdown.png'

const Navbar = () => {
    const[menu, setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e)=>{
      menuRef.current.classList.toggle('nav-menu-visible');
      e.target.classList.toggle('open');
    }



  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="img" />
            <p>Anish E-shop</p>
        </div>
        <img className='nav-dropdown' src={nav_dropdown} onClick={dropdown_toggle} alt="" />
        <ul ref={menuRef} className='nav-menu'>
            <li onClick={()=>setMenu("shop")}> <Link to='/' >Shop</Link>  {menu ==="shop"? <hr/> : <></>} </li>
            <li onClick={()=>setMenu("mens")}> <Link to='/men' >Men</Link> {menu ==="mens"? <hr/> : <></>}</li>
            <li onClick={()=>setMenu("womens")}> <Link to='/women' >Women</Link> {menu ==="womens"? <hr/> : <></>}</li>
            <li onClick={()=>setMenu("kids")}> <Link to='/kids' >Kids</Link> {menu ==="kids"? <hr/> : <></>}</li>
        </ul>
        <div className='nav-login-cart'>
          {localStorage.getItem('auth-token')?
          <button onClick={()=>{localStorage.removeItem('auth-token');
            window.location.replace('/login')
          }}>Logout</button> :
           <Link to='/login'>
           <button>Login</button>
           </Link> 
           }
            <Link to='/cart'><img src={cart_icon} alt="icon" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      
    </div>
  )
}

export default Navbar
