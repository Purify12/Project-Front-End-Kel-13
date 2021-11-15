import React, {useState} from 'react';
import LoginForm from '../Component/LoginForm';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Wrapper = styled.section`
  display:flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button.attrs((props) => {
  const rounded = props.rounded || "24px";
  
  const theme = window.localStorage.getItem("theme");
  return {
    withRounded: rounded, // computed props
    bg: theme === "dark" ? "blue" : "lightblue",
  };
})`
background: ${(props) => (props.w ? "black" : "white")};
color: ${(props) => (props.primary ? "white" : "black")};

font-size: 2em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid black;
background-color: ${(props) => props.bg};
border-radius: ${(props) => props.withRounded};

&:hover {
  background-color: white;
}

`;

// Custom
const CardContent = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  max-width: 100%;
  margin: 20px;
  overflow: hidden;
  width: 800px;
`;

const CH6 = styled.h6`
  opacity: 0.6;
  margin: 0;
  letter-spacing: 1px;
  text-transform: uppercase;
`;
const CH3 = styled.h3`
  letter-spacing: 1px;
  margin: 10px 0;
`;
const English = styled.h6`
    color: darkblue;
`
const CardPrev = styled.div`
  background-color: #2a265f;
  color: #fff;
  padding: 30px;
  max-width: 250px;
`;

const CardInfo = styled.div`
  padding: 30px;
  position: relative;
  width: 100%;
`;

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
            setError("Detail not match !!!");
    
          }
        }
    
      const Logout = () =>{
          setUser({name:"", email:""});
      }
      return (
        <div className="Login">
          {(user.email !== "")? (
            <div className ="Welcome">
              <h1 className ="m-5 p-8"><b>Welcome, <span>{user.name}</span></b></h1>
              <Wrapper>
        <CardContent>
          <CardPrev>
            <CH6>OnVocation</CH6>
            <CH3>For Better Vocation</CH3>
          </CardPrev>
          <CardInfo>
            <h2>Announcement</h2>
            <h6>Halo, <span>{user.name}</span>.{"\n"}</h6>
            <h6 class="justify"> 
              Selamat menggunakan OnVocation, jelajahi aplikasi untuk mengetahui lebih banyak tentang detail daerah wisata populer di seluruh indonesia, baik berdasarkan rekomendasi kami maupun pilihan seorang influencer terkemuka. Temukan destinasi pilihan anda dan dapatkan juga souvenir yang belum sempat anda beli saat perjalanan pulang.
                  Selamat menjelajah -_- </h6>
            <English>
            Congratulations on using OnVocation, explore the application to find out more about the details of popular tourist areas throughout Indonesia, both based on our recommendations and the choices of a leading influencer. Find the destination of your choice and also get souvenirs that you haven't had time to buy on your way home. Enjoy your browsing -_-
            </English>
          </CardInfo>
        </CardContent>
        
      </Wrapper>
      <Wrapper>
              <div className="button">
                <Button><Link to="/home" class="text-black">Getting Started</Link></Button>
                <Button onClick={Logout}><a class="text-black">Logout</a></Button>
              </div>
      </Wrapper>
              
            </div>
          ) : (
            <LoginForm Logins={Logins} error={error}/>
          )}
      
        </div>
      );
    }

export default Loginpage
