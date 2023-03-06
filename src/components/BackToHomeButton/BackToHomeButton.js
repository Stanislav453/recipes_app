import "./BackToHomeButton.scss"
import { IoHomeSharp } from "react-icons/io5";
import { Link } from "react-scroll";
import { useState } from "react";

export const BackToHomeButton = () => {

const [ backToHomeButton, setBackToHomeButton ] = useState(false)

const showButton = () => {

    if( window.scrollY >= 500 ) {
        setBackToHomeButton(true)
    } else {
        setBackToHomeButton(false)
    }

}

window.addEventListener("scroll", showButton)


    //window.scrollY
    //back-to-home-button
    return(
        <button className={ backToHomeButton ? "back-to-home-container back-to-home-container-show" : "back-to-home-container" } aria-label="header">
            <Link activeClass="active" to="header" spy={true} smooth={true} offset={50} duration={500}>
                <IoHomeSharp className="back-to-home-button" />
            </Link>
        </button>
    )
}