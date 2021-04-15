import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Nav.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from '../StateProvider';
import logo from '../img/logo.png'
import MenuIcon from '@material-ui/icons/Menu';
import CancelIcon from '@material-ui/icons/Cancel';

const Nav = () => {
    const [{basket}] = useStateValue();

    const [sideBar,setSidebar] = useState(false);

    const [showIcon,setShowIcon] = useState(false);

    const [HideIcon,setHideIcon] = useState(false);
    const showSidebar = () =>
    {
        setSidebar(!sideBar); 
    }
    const VisibleIcon = () => {
        setShowIcon(!showIcon);
    }
    const hide = () => {
        setSidebar(true);
    }

    return (
        <div className='nav'>
            <nav>
                
                    <Link to='/' className="brand-logo">
                        <img src={logo}/>
                        ZONE</Link>

                        <div id="MenuIcon" className={HideIcon ? 'MenuIcon' : 'MenuIcon active'} onClick={VisibleIcon}>
                            <MenuIcon id='menu_icon' onClick={showSidebar}/>
                        </div>
                    <div id='menu' className={sideBar ? 'menu' : 'menu active'}>
                    <ul>
                    <div id="CrossIcon" className={showIcon ? 'CrossIcon' : 'CrossIcon active' }>
                        <CancelIcon id='cancle_icon'  onClick={hide}/>
                    </div>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                        <li><Link to='/userCart'>
                        <div className="cartCount"><p>{basket.length}</p><ShoppingCartIcon id='cartIcon' /></div>
                        </Link></li>
                        <li><Link to='/login'>Login/Register</Link></li>
                    </ul>
                
                </div>
                <ul id="nav-mobile" className="right">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                        <li><Link to='/userCart'>
                        <div className="cartCount"><p>{basket.length}</p><ShoppingCartIcon id='cartIcon' /></div>
                        </Link></li>
                        <li><Link to='/login'>Login/Register</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
