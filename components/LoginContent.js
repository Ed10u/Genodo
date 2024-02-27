import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import { signInWithEmailAndPassword,onAuthStateChanged} from 'firebase/auth'
import {auth} from '../library/firebaseConfig';


const HomeContent = () => {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    useEffect(() => { 
        onAuthStateChanged(auth, (user) => {
            if (user) {
                window.location.href = '/searchPage';
            } else {
            }
        });
    }); 


    const LoginButton= async ()=>{
        try{
        const user = await signInWithEmailAndPassword(auth,loginEmail,loginPassword);
        console.log(user);
        } catch(error){
            console.log(error.message);
        }
    }
        
  return (
    <>
    <HomePageContainer>
        <ButtonContainer>
            <h1 style={{fontSize:"35px",fontWeight:"bold"}}>Login</h1>
            <ContentInput placeholder="Enter your User/Email" onChange={(event) => setLoginEmail(event.target.value)}/>
            <PasswordInput type="password" placeholder="Enter your Password" onChange={(event) => setLoginPassword(event.target.value)}/>
            <ContentButton onClick={LoginButton}>
                Login
            </ContentButton>
            <Register href = "/register">
                register
            </Register>
        </ButtonContainer>
    </HomePageContainer>
    </>
  );    
};

const HomePageContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    height:100vh;
    align-items:center;
    background-color: #f4fbfb;

`;

const ButtonContainer = styled.div`
    width:30%;
    display:flex;
    justify-content:space-between;
    flex-direction:column;
    gap:20px;
    align-items:center;

    
`//the button
const ContentButton = styled.button`
    width:50%;
    height:3vw  ;
    border:none;
    color:white;
    font-size:18px;

    background-color:rgb(87,202,195);
    border-radius:6px; /* round boder */
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover{
        background-color:#0D98BA;
        transform: scale(1.008);
    }

`//the input

const ContentInput = styled.input`
    width:100%;
    height:50px;
    background-color:#d9ebf4;
    border:none;
    border-radius:6px;/* make the boarder round*/
    font-size:16px;
    padding-left:15px;

    &:focus{
        outline:none;
        border:none;

    }

`
const PasswordInput = styled(ContentInput)`
`
const Register = styled.a`
    font-size:16px;
    font-size:1vw;
    color: black;

    text-align:center;

    cursor: pointer;
    transition: 0.3s ease-in-out;
    &:hover{
        text-decoration:underline;
    }

`
export default HomeContent;