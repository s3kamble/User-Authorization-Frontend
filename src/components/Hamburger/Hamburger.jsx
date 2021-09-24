import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import menu from "../../menu-black.jpg";
import close from "../../close.jpg"
import styles from "../Hamburger/Hamburger.module.css"

function Hamburger(){
    const[isMenuOpen,setIsMenuOpen]=useState(false);
    const openMenu = ()=>{
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(()=>{
        setTimeout(()=>{
        setIsMenuOpen(false)
        },5000)
    },[isMenuOpen])
    return(
        <>
        <li className={styles.menu} onClick={openMenu} >
            <img src={isMenuOpen?close:menu} alt="menu" />
        </li>

        {
        isMenuOpen?
        <ul className={styles.navlinks}>
                <li >
                    <Link to="/contact" className={styles.links}>Contact</Link>
                </li>
                <li >
                    <Link to="/feedback" className={styles.links}>Feedback</Link>
                </li>
        </ul>:
        ""
        }
        </>

        
    )
}

export default Hamburger