import React, {useState} from 'react';
import styled from "styled-components";

const Container = styled.div`
  margin:0;
  padding:0;
  box-sizing:borderbox;
  font-weight: bold;
  display:flex;
  justify-content:center;
  background-color: blue;
  position:relative;
`;

function LoginForm({Logins, error}) {

    const [details, setDetails] = useState({name: "", email:"", password:""});

    const submitHandler = e =>{
        e.preventDefault();

        Logins(details);
    }
    return (
    <Container>
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {(error !== "") ? ( <div classname="error">{error}</div> ) : ""}
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" onChange={e => setDetails({ ...details, name:e.target.value})} value={details.name}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" id="email" onChange={e => setDetails({ ...details, email:e.target.value})} value={details.email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="text" name="password" id="password" onChange={e => setDetails({ ...details, password:e.target.value})} value={details.password}/>
                </div>
                    <input type="submit" value="Login" />
                 </div>
        </form>
    </Container>                   
  )};
  
  export default LoginForm;
  