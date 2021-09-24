import React,{useState} from "react";
import { Link,Redirect } from "react-router-dom";
import styles from "../Signup/Signup.module.css"

// const url="http://localhost:3002/users/signup"
const url="https://user-authorization-backend.herokuapp.com/users/signup"


const Signup = ()=>{
  const [redirect, setRedirect] = useState(false);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

 
  const handleChange = (event) => {
      switch(event.target.name){
          case 'userName':
              setUserName(event.target.value);
              break;
          case 'email':
              setEmail(event.target.value);
              break;
          case 'password':
              setPassword(event.target.value);
              break;
          case 'confirmPassword':
              setConfirmPassword(event.target.value);
              break;
          default:
              break;
      }
  }

  const signup = async (event) => {
      event.preventDefault();
      
      const reqObj = {
          userName: userName,
          email: email,
          password: password,
          confirmPassword: confirmPassword,
      }

      try{
          let resData = await fetch(url, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(reqObj),
          });
  
          resData = await resData.json();
          console.log(resData)

          if(resData ){
              event.target.userName.value =
              event.target.email.value =
              event.target.password.value = 
              event.target.confirmPassword.value = "";
              alert("User Created Successfully");
              setRedirect(true);
          }
          else{
              event.target.userName.value =
              event.target.email.value =
              event.target.password.value = 
              event.target.confirmPassword.value = "";
              alert("User Could not be created");
              setRedirect(false);
          }
          
      }catch(err){
          console.log(err);
          event.target.userName.value =
          event.target.email.value =
          event.target.password.value = 
          event.target.confirmPassword.value = "";
          alert("Failed to create User!!");
      }
  }

  return <>

          <form  onSubmit={signup} className={styles.formContainer}>
              <h1>SIGNUP</h1>
              
              <div className={styles.formDiv}>
                <label htmlFor="username" className={styles.labels} >User Name :</label>
                <input id="userName" type="text" name="userName" onChange={handleChange} className={styles.inputs}required/>
              </div>
              
              <div className={styles.formDiv}>
                <label htmlFor="email" className={styles.labels}>Email :</label>
                <input id="email" type="email" name="email" onChange={handleChange} className={styles.inputs}required/>
              </div>
             
              <div className={styles.formDiv}>
                <label htmlFor="password" className={styles.labels}>Password: </label>
                <input id="password" type="password" name="password" onChange={handleChange} className={styles.inputs}  autoComplete="on" required minLength="8"/>
              </div>
              
              <div className={styles.formDiv}>
                <label htmlFor="confirmPassword" className={styles.labels}>Confirm Password: </label>
                <input id="confirmPassword" type="password" name="confirmPassword" className={styles.inputs} onChange={handleChange} autoComplete="on" required minLength="8"/>
              </div>
             

              <button type="submit" className={styles.button}>SIGNUP</button>

              <p>Already have an account? <Link to="/login">LOGIN</Link></p>
          </form>

          {redirect? <Redirect to="/login" />: " "}
   
  
  </>
}

export default Signup;