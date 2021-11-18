import React, {useState} from 'react';
import styled from "styled-components";
import Navlogin from './Navlogin';

const Container = styled.div`    
    margin: 5em;
    display:flex;
    justify-content: center;
    align-items:center;
`
const CardInfo = styled.div`
  padding-left: 30px;
  position: relative;
  width: 50%;
`;

const CardContent = styled.div`
  background-color: lightblue;
  border-radius: 10px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  max-width: 100%;
  margin: 20px;
  overflow: hidden;
  width: 800px;
  justify-content:center;
`;
const LoginButton = styled.button.attrs((props) => {
    const rounded = props.rounded || "12px";
    
    const theme = window.localStorage.getItem("theme");
    return {
      withRounded: rounded, // computed props
      bg: theme === "dark" ? "blue" : "green",
    };
  })`
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  background-color: ${(props) => props.bg};
  border-radius: ${(props) => props.withRounded};

  &:hover {
    background-color: white;
  }

`;
function LoginForm({Logins, error}) {

    const [details, setDetails] = useState({name: "", email:"", password:""});

    const submitHandler = e =>{
        e.preventDefault();

        Logins(details);
    }
    return (
      <>
      <Navlogin />
        <Container>
            <CardContent>
                <form onSubmit={submitHandler}>
                    <div className="form-inner">
                        <h2>Login</h2>
                        {(error !== "") ? ( <div classname="error">{error}</div> ) : ""}
                        
                        <div className="form-group mb-3">
                            <CardInfo><label htmlFor="name">Name:</label>
                          <input type="text" name="name" id="name" placeholder="Input Nama User" onChange={e => setDetails({ ...details, name:e.target.value})} value={details.name}/>
                            </CardInfo>
                            
                            
                        </div>
                        <div className="form-group mb-3">
                            <CardInfo> <label htmlFor="email">Email:</label>
                            <input type="email" name="email" id="email" placeholder="Email:user@gmail.com" onChange={e => setDetails({ ...details, email:e.target.value})} value={details.email}/>
                            </CardInfo>
                          
                            
                        </div>
                        <div className="form-group mb-3">
                            <CardInfo><label htmlFor="password">Password:</label>
                            <input type="password" name="password" id="password" placeholder="Pass:user123" onChange={e => setDetails({ ...details, password:e.target.value})} value={details.password}/>
                            </CardInfo>
                            
                            
                        </div>
                            <LoginButton type="submit">
                                Login
                            </LoginButton>
                            
                        </div>
                </form>
            </CardContent> 
        </Container>
    </>                  
  )};
  
  export default LoginForm;
  