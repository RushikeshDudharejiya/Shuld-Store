import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Nav.css'
// import icon
import { AiOutlineSearch,AiOutlineUser,AiOutlineHeart,AiOutlineShopping } from 'react-icons/ai'

function Nav() {
  return (
    <div className='main-hedar'>
        <div className='menu-hedar'>
            <div className='head-main-menu'>
                <Link to="/Men" className='menu-head-link'>
                    <p className='hedar-p-logo'>Men</p>
                </Link>
                <Link to="/Women" className='menu-head-link'>
                    <p className='hedar-p-logo'>Women</p>
                </Link>
                <Link to="/Kids" className='menu-head-link'>
                    <p className='hedar-p-logo'>Kids</p>
                </Link>
                <div className='second-head'>
                    <span className='second-span'>
                        <p className='second-p'>Track Order</p>
                    </span>
                    <span className='second-span'>
                        <p className='second-p'>Contact Us</p>
                    </span>
                    <span className='second-span'>
                        <p className='second-p'>Download App</p>
                    </span>
                </div>
            </div>
            <div className='third-head'>
                <div className='logo-eye'>
                </div>
                <Link to="/" className='img-logo-head'>
                    <img src="https://www.thesouledstore.com/static/img/newlogo.8dcc6cc.png" alt="" className='img-logo'/>
                </Link>
                <Link to="/Topwear" className='headar-link'>
                    <p className='hedar-p'>Topwear</p>
                </Link>
                <Link to="/Bottomwear" className='headar-link'>
                    <p className='hedar-p'>Bottomwear</p>
                </Link>
                <Link to="/Sneakers" className='headar-link'>
                    <p className='hedar-p'>Sneakers</p>
                </Link>
                <Link to="/Accessories" className='headar-link'>
                    <p className='hedar-p'>Accessories</p>
                </Link>
                <Link to="/Collection" className='headar-link'>
                    <p className='hedar-p'>Collection</p>
                </Link>
                <Link to="/Shopbythemes" className='headar-link'>
                    <p className='hedar-p'>Shopbythemes</p>
                </Link>
                <div className='icon-box'>
                    <Link className='icon-menu'>
                        <span className='icon'><AiOutlineSearch/></span>
                    </Link>                    
                    <Link className='icon-menu' to="/Signup">
                        <span className='icon'><AiOutlineUser/></span>
                    </Link>
                    <Link className='icon-menu'>
                        <span className='icon'><AiOutlineHeart/></span>
                    </Link>
                    <Link className='icon-menu'>
                        <span className='icon'><AiOutlineShopping/></span>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nav