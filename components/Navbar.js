import React, { useState,useEffect } from 'react';
import styled, {keyframes} from 'styled-components'
import {onAuthStateChanged,signOut} from 'firebase/auth';
import {auth} from '../library/firebaseConfig';
import { useRouter } from 'next/router'
import {useScrollValue} from '@/components/customHook/scrollValue'
import { useFullLoginMenu } from '../components/customHook/fullLoginMenuProvider';



const Navbar = () => {
    const [loggedUser, setLoggedUser] = useState("LogInMenu");
    const router = useRouter();
    const ValueOfScroll = useScrollValue();
    
    useEffect(() => { 
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoggedUser(user.email);
            } else {
                setLoggedUser("LogInMenu");
                
            }
        });
    },[]); 

    const {setIsVisible } = useFullLoginMenu();
    const handleHomeButton = async()=>{
        router.push("/");
    }
    const handleAboutButton = async()=>{
        router.push("/about");
    }
    const handleSearchPageButton = async()=>{
        router.push("/searchPage");
    }
  return (
    <>
    <Container $ValueOfScroll = {ValueOfScroll}>
        <WebName>
            <Icon src='./icon.png'></Icon>
            <WebsiteName href="/">GenoDo</WebsiteName>
        </WebName>
        <NavigationButtonContainer>
            <Navigator onClick={handleHomeButton}>Home</Navigator>
            <Navigator onClick={handleSearchPageButton}>Search</Navigator>
            <Navigator onClick={handleAboutButton}>About</Navigator>
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
    z-index:10;

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
    width:40%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    background-color: white;
    padding-top:0.75vw;
    translate: 0 cal(-1%*(max(var(--scroll),25)-25)*100/75);


    `;

const Navigator = styled.button`
    font-size:1.3vw;
    font-weight: bold;
    color: #79D4FF;
    text-decoration:none;
    background-color:white;

    cursor: pointer;
    text-decoration:none;
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    border-style: none;
    flex-shrink: 0;
    transition: transform 0.5s ease, background-color 0.5s ease-in-out, color 0.5s ease-in-out;
    padding:0.2rem 1rem;


    &:hover{
        transform: scale(1.05);
        background-color: #79D4FF;
      color: white;

    }
`;


const Login = styled.button`
    font-size:1.3vw;
    font-weight: bold;
    color: #79D4FF;
    background-color:white;

    text-decoration:none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    border-style: none;
    flex-shrink: 0;
    transition: transform 0.5s ease, background-color 0.5s ease-in-out, color 0.5s ease-in-out;
    position: relative;
    padding:0.2rem 1rem;

    &:hover{
        transform: scale(1.05);
        background-color: #79D4FF;
      color: white;

    }
`
const LoginContainer = styled.div`
`;



export default Navbar