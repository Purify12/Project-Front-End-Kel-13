import React, {useState} from 'react'
import LoginForm from '../Component/LoginForm';

function Loginpage() {
    const userLogin={
        email: "user@gmail.com",
        password: "user123"
      }
      const [user, setUser] = useState({name: "", email: ""});
      const [error, setError] = useState ("");
    
      const Logins = details => {
          console.log(details);
    
          if(details.email === userLogin.email && details.password === userLogin.password){
          console.log("Log in");
          setUser({
            name: details.name,
            email: details.email
          })
          } else {
            console.log("Detail not match");
            setError("Detail not match");
    
          }
        }
    
      const Logout = () =>{
          setUser({name:"", email:""});
      }
      return (
        <div className="App">
          {(user.email !== "")? (
            <div className ="Welcome">
              <h2>Welcome, <span>{user.name}</span></h2>
              <button onClick={Logout}>Logout</button>
            </div>
          ) : (
            <LoginForm Logins={Logins} error={error}/>
          )}
      
        </div>
      );
    }

export default Loginpage
