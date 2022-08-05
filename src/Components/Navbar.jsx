import React, {useState} from 'react'
import './Navbar.css'

const Navbar = () => {
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 63){
            setColor(true);
        }else{
            setColor(false);
        }
    }
    window.addEventListener("scroll", changeColor);
  return (
    <div className="Navbar-bg">
        <div className={color ? 'Navbar' : 'Navbar none'}>
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
        <div ></div>
    </div>
  )
}

export default Navbar