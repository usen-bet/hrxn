import "./Styles/Navbar.scss"
import { useState } from "react";
import nobgLogo from './Imgs/no-bgLogo.png'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";


function Navbar() {
  const [unclick, setUnclick] = useState(true)
  const toggle = () => {
    console.log("trap")
    setUnclick(!unclick)
  }
  return (
    <div className="nav-bar">
        <img src={nobgLogo} className="hrxn"/>
        <ul className="links">
            <li><a href="">New-in</a></li>
            <li><a href="">Shirts</a></li>
            <li><a href="">Hoodies</a></li>
            <li><a href="">About</a></li>
        </ul>
        <div className="icons">
        <AiOutlineShoppingCart className="icon" />
        <IoMdHeartEmpty className="icon" />
        </div>
        <div onClick={toggle} className={unclick ? " hamburger" : "active"}>
          <div className={unclick ? "ham-top " : "one"}></div>
          <div className={unclick ? "ham-mid white" : "white two"}></div>
          <div className={unclick ? "ham-bottom" : "three"}></div>
        </div>
    </div>
  )
}

export default Navbar