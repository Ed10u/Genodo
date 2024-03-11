import React, { useState,useEffect } from 'react';
import styled, {keyframes} from 'styled-components'
import {onAuthStateChanged,signOut} from 'firebase/auth';
import {auth} from '../library/firebaseConfig';
import { useRouter } from 'next/router'
import { useFullLoginMenu } from '../components/customHook/fullLoginMenuProvider';



const NavbarSolid = () => {
    const [loggedUser, setLoggedUser] = useState("LogIn");
    const router = useRouter();

    useEffect(() => { 
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoggedUser(user.email);
            } else {
                setLoggedUser("LogIn");
                
            }
        });
    },[]); 

    const { isVisible, setIsVisible } = useFullLoginMenu();

  return (
    <>
    <Container>
        <WebName>
            <Icon src='./icon.png'></Icon>
            <WebsiteName href="/">GenoDo</WebsiteName>
        </WebName>
        <NavigationButtonContainer>
            <Navigator href="/">Home</Navigator>
            <Navigator href = "/about">About</Navigator>
            <LoginContainer>
                <Login onClick={()=>setIsVisible(true)}>{loggedUser}</Login>
              </LoginContainer>   
        </NavigationButtonContainer>
    </Container>
    </>
  )
}

const Icon = styled.img`
    width:9%;
    height:90%;
`;
const WebName = styled.div`
    font-family: 'poppins-bold', sans-serif !important;
    display:flex;
    flex-direction:row;
    width:30%;
`

const Container = styled.div`
    width:92.9vw;
    background-color: white;
    position:sticky;
    top:0;
    z-index:1;

    display: flex;
    justify-content: space-between;
    flex-direction: row;


    padding-top: 0.3vw;
    padding-bottom: 0.7vw;
    padding-right: 3vw;
    padding-left: 3vw;

`;
//(oldValue-oldMin)*newRange/oldRange+newMin

const WebsiteName = styled.a`
    font-size: 2.2vw;
    font-weight: bold;
    color: rgb(87,202,195);

    text-decoration:none;
`

const NavigationButtonContainer = styled.div`
    width:30%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    background-color: white;
    padding-top:0.75vw;


    `;

const Navigator = styled.a`
    font-size:1.3vw;
    font-weight: bold;
    color: #79D4FF;
    text-decoration:none;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover{
        transform: scale(1.1);
    }`;
const Login = styled.button`
    font-size:1.3vw;
    font-weight: bold;
    color: white;
    text-decoration:none;
    cursor: pointer;
    background-color: #79D4FF;
    display: flex;
    flex-direction: column;
    border-radius: 2rem;
    border-style: none;
    flex-shrink: 0;
    transition: transform 0.5s ease;
    position: relative;
    padding:0.2rem 1rem;

    &:hover{
        transform: scale(1.1);
    }
`
const LoginContainer = styled.div`

`;

export default NavbarSolid