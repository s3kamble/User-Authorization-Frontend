import React from "react";
import { Link } from "react-router-dom";
import styles from "../Home/Home.module.css"


const Home = ()=>{
    return(
        <div className={styles.container}>
            <h1>Login to view your dashboard </h1>
            <button className={styles.buttons}><Link to='/login' className={styles.buttonLinks} >Login</Link></button>
            <h3>New to our site?</h3>
            <button className={styles.buttons} ><Link to='/signup' className={styles.buttonLinks}>SignUp</Link></button> 
        </div>
    )
}

export default Home;