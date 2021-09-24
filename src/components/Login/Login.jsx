import React,{useState,useContext} from "react";
import { Link,Redirect} from "react-router-dom";
import LoginContext from "../../utils/loginContext";
import styles from "../Login/Login.module.css"

// const url="http://localhost:3002/users/login"
const url="https://user-authorization-backend.herokuapp.com/users/login"

const Login = ()=>{
    const [redirect, setRedirect] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {setLogin, setUser} = useContext(LoginContext);
    
    const handleChange = (event) => {
        switch(event.target.name){
            case 'email':
                setEmail(event.target.value);
                break;
            case 'password':
                setPassword(event.target.value);
                break;
            default:
                break;
        }
    }

    const loginUser = async (event) => {
        event.preventDefault();
        
        const data = {
            email: email,
            password: password,
        }

        try{
            let resData = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
    
            resData = await resData.json();
          
            if(resData.token){
                event.target.email.value = event.target.password.value = ""; 
                setUser(resData.userName)     
                setLogin(true);
                setRedirect(true); 
            }
            else{
                event.target.email.value = event.target.password.value = ""
                alert("Could not login")
            }

        }catch(err){
            console.log(err);
            event.target.email.value = event.target.password.value = "";
            alert("Check your credentials. ");
        }
    }

    return(
        <>
        
        
        <form  onSubmit={loginUser} className={styles.formContainer}>
                <h1>LOGIN</h1>

                <div className={styles.formDiv}>
                    <label htmlFor="email" className={styles.labels} >Email </label>
                    <input id="email" type="email" name="email" onChange={handleChange} className={styles.inputs} required/>
                </div>
               <div className={styles.formDiv}>
                    <label htmlFor="password" className={styles.labels} >Password </label>
                    <input id="password" type="password" name="password" onChange={handleChange} className={styles.inputs} required  autoComplete="on"/>
               </div>

              
                <button type="submit" className={styles.button}>LOGIN</button>

                <p>Don't have an account? <Link to="/signup">Signup</Link></p>
         </form>
        
         {redirect ? <Redirect to="/dashboard" /> : ''}

    </>
    )
}

export default Login;