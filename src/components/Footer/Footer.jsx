import React from 'react';
import {Link} from 'react-router-dom'
import logo from "../../logo.png";
import styles from "../Footer/Footer.module.css"


function Footer(){
    
    return(
        <div className={styles.footerBar}>
            <div className={styles.logo}>
                <Link to="/">
                   <img className={styles.logoImg} src={logo} alt="Logo"></img>
                </Link>
            </div>
            <div className={styles.title}>
                <h3>Privacy Policy</h3>
            </div>
            <ul className={styles.footerlinks}>
                <li className={styles.links}>
                    <Link to="/help" className={styles.links}>Help? </Link>
                </li>
                <li className={styles.links}>
                    <Link to="/contact" className={styles.links}> Contact</Link>
                </li>
            </ul>

            
        </div>
    )
}

export default Footer;