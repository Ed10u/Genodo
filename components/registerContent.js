import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import {createUserWithEmailAndPassword,onAuthStateChanged} from 'firebase/auth';
import {auth} from '../library/firebaseConfig';
import {useRouter} from 'next/router'


const RegisterContent = () => {
    useEffect(()=>{
        const Change=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            if(auth.currentUser){
                window.location.href = '/login';
            } else {
            }
        })
        return ()=> Change();
      })
    const [registerEmail,setRegisterEmail] = useState("");
    const [registerPassword,setRegisterPassword] = useState("");
    const [user,setUser] = useState({});
    useEffect(()=>{
        const Change=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        })
        return ()=> Change();
        
      })

    const Register= async ()=>{
        try{
        const user = await createUserWithEmailAndPassword(auth,registerEmail,registerPassword);
        console.log(user);
        } catch(error){
            console.log(error.message);
        }
    }
  return (
    
    <>
    <HomePageContainer>
        <ButtonContainer>
            <h1 style={{fontSize:"35px",fontWeight:"bold"}}>Register</h1>
            <ContentInput placeholder="Enter your User/Email" onChange={(event)=>{setRegisterEmail(event.target.value)}}/>
            <PasswordInput type="password" placeholder="Enter your Password" onChange={(event)=>{setRegisterPassword(event.target.value)}}/>
            <ContentButton onClick={Register}>
                Register
            </ContentButton>
            <GobackToLogin href = "/login">
                Login
            </GobackToLogin>
        </ButtonContainer>
    </HomePageContainer>
    </>
  );    
};

const GobackToLogin = styled.a`
`
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

export default RegisterContent;