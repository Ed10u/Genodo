import React, { useState,useEffect } from 'react';
import styled, {keyframes} from 'styled-components'
import {onAuthStateChanged,signOut} from 'firebase/auth';
import {auth} from '../library/firebaseConfig';
import { useRouter } from 'next/router'
import {useScrollValue} from '@/components/customHook/scrollValue'


const Navbar = () => {
    const [loggedUser, setLoggedUser] = useState("LogIn");
    const router = useRouter();
    const ValueOfScroll = useScrollValue();
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
        router.push('/searchHistory');
    };
      
  return (
    <>
    <Container $ValueOfScroll = {ValueOfScroll}>
        <WebName>
            <Icon src='./icon.png'></Icon>
            <WebsiteName href="/">GenoDo</WebsiteName>
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
    width:9%;
    height:90%;
`;
const WebName = styled.div`
    font-family: 'poppins-bold', sans-serif !important;
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
    width:92.9vw;
    background-color: white;
    opacity:0;
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

    animation: ${slideIn} 1s ease-in-out forwards;
    animation-delay:1.8s;
    animation-duration: 2s;

    translate: 0 ${props => Math.max(-1*(Math.max(props.$ValueOfScroll,20)-20)*100/20,-100)}%;
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

    translate: 0 cal(-1%*(max(var(--scroll),25)-25)*100/75);


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