import React, {useState, useEffect} from 'react'
import './Navbar.css'

const Navbar = () => {
    const [color, setColor] = useState(false);
    const [nav , setNav] = useState(false);
    const [menu , setMenu] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 63){
            setColor(true);
        }else{
            setColor(false);
        }
    }
    const handleNav = () => {
        setNav(!nav);
    }
    const displayNav = () => {
        if(window.screen.width <= 742){
            setMenu(true);
        }else{
            setMenu(false);
        }
    }
    window.addEventListener("resize", displayNav);
    window.addEventListener("scroll", changeColor);
    useEffect(() => {
      displayNav();
    })
    
  return (
    <div>
        <div className={nav ? 'Nav-mob' : 'navnone'}>
            <button onClick={handleNav} className='btn-close'>
                <img src={require('../assets/close.png')} alt="" />
            </button>
        <ul className="nav-mob-link">
                <span className='text'>Login/Signup</span>
                <hr />
                    <li>Fitness</li>
                    <li>Nutrition</li>
                    <li>Gyms</li>
                    <li>Become WTF Partner</li>
                    <li>About Us</li>
                </ul>
        </div>
        <div className="Navbar-bg">
            <div className={color ? 'Navbar' : 'Navbar none'}>
                <button onClick={handleNav} className={menu ? 'btn-menu' : 'navnone'}>
                <img src={require('../assets/menu.png')} alt="" />
                </button>
                <h1>WTF</h1>
                <ul className={color ? 'nav-link' : 'nav-link none'}>
                    <li>Fitness</li>
                    <li>Nutrition</li>
                    <li>Gyms</li>
                    <li>Become WTF Partner</li>
                    <li>About Us</li>
                    <button className='login-btn'>Login</button>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar