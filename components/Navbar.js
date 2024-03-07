import React, { useState,useEffect } from 'react';
import styled, {keyframes} from 'styled-components'
import {onAuthStateChanged,signOut} from 'firebase/auth';
import {auth} from '../library/firebaseConfig';
import { useRouter } from 'next/router'


const Navbar = () => {
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
    const handleLogout = async () => {
        await signOut(auth);
        setLoggedUser("LogIn");
      };
    const handleSearchHistory = async () => {
        console.log("hahaha");

        router.push('/searchHistory');
    };
      
  return (
    <>
    <Container>
        <WebName>
            <Icon src='./icon.png'></Icon>
            <WebsiteName>GenoDo</WebsiteName>
        </WebName>
        <NavigationButtonContainer>
            <Navigator href="/">Home</Navigator>
            <Navigator href = "/about">About</Navigator>
            <LoginContainer>
                <Login href ="/login">{loggedUser}</Login>
                <DropdownMenu>
                    <SearchHistory onClick={handleSearchHistory}>Search History</SearchHistory>
                  <LogoutButton onClick={handleLogout}>Log Out</LogoutButton>                
                </DropdownMenu>
              </LoginContainer>   
        </NavigationButtonContainer>
    </Container>
    </>
  )
}

const Icon = styled.img`
    width:7%;
    height:90%;
`;
const WebName = styled.div`
    display:flex;
    flex-direction:row;
    width:30%;
`
const slideIn = keyframes`
    from{
        transform: translateY(-100%);
        opacity:0;
    }
    to{
        transform:translateY(0);
        opacity:1;
    };
`;
const Container = styled.div`
    width: 90%;
    background-color: white;
    opacity:0;

    display: flex;
    justify-content: space-between;
    flex-direction: row;


    padding-top: 0.8vw;
    padding-bottom: 1vw;
    padding-right: 3vw;
    padding-left: 3vw;

    animation: ${slideIn} 1s ease-in-out;
    animation-delay:2s;
    animation-duration: 2s;
    animation-fill-mode:forwards;


`;

const WebsiteName = styled.div`
    font-size: 2.2vw;
    font-weight: bold;
    color: rgb(87,202,195);
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
        transform: scale(1.2);
    }`;
const Login = styled(Navigator)`

`
const LoginContainer = styled.div`
  position: relative;
  display: inline-block;
  &:hover{
    transform: scale(1.1);
`;

const DropdownMenu = styled.div`
  display: none;
  position:absolute;
  background-color: #f9f9f9;
  width:100%;
  padding: 12px 16px;
  z-index: 1000;

  ${LoginContainer}:hover & {
    display: block;
  }
`;
const LogoutButton = styled.button`
  background-color:white;
  padding: 10px 20px;
  text-decoration: none;
  display: block;
  width: 100%;
  height:30%;
  font-weight:bold;
    color:#79D4FF;
  border:none;

  &:hover{
    transform: scale(1.2);
`;

const SearchHistory = styled(LogoutButton)`
`

export default Navbar