import { useState } from "react";
import logo from "./logo.png";
import { FaHamburger } from "react-icons/fa";

function Navbar(){
    const [shrink,setshrink]= useState(true);

    function shrinkb(){
        setshrink(!shrink);
        console.log(shrink);
    }
    return (
        <nav className="navcontainer">
        <div className="burgercomponent">
            <img className="logo" src={logo}></img>
            <FaHamburger className="burg" onClick={shrinkb}/>
        </div>
        <ul className= {"navcomponent "+(shrink? "hide":"")}>
            <li className="item"><a href="#home">Home</a></li>
            <li className="item"><a href="#about">About</a></li>
            <li className="item"><a href="#education">Education</a></li>
            <li className="item"><a href="#experience">Experience</a></li>
            <li className="item"><a href="#service">Services</a></li>
            <li className="item"><a href="#skill">Skills</a></li>
            <li className="item"><a href="#projects">Projects</a></li>
            <li className="item"><a href="#contact">Contact</a></li>
        </ul>
        </nav>
    );
}
 export default Navbar;