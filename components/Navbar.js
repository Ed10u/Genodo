import React from 'react'
import styled, {keyframes} from 'styled-components'
import {auth} from '../library/firebaseConfig';

const Navbar = () => {
  return (
    <>
    <Container>
        <Icon src='./icon.png'></Icon>
        <WebsiteName>GenoDo</WebsiteName>
        <NavigationButtonContainer>
            <Navigator href="/">Home</Navigator>
            <Navigator href = "/about">About</Navigator>
            <Login href = "/login">Login</Login>
        </NavigationButtonContainer>
    </Container>
    </>
  )
}

const Icon = styled.img`
    width:40px;
    height:40px;
`;

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
    width: 90vw;
    background-color: white;
    opacity:0;

    display: flex;
    justify-content: space-between;
    flex-direction: row;


    padding-top: 2vw;
    padding-bottom: 2vw;
    padding-right: 3vw;
    padding-left: 3vw;

    animation: ${slideIn} 1s ease-in-out;
    animation-delay:0.5s;
    animation-duration: 2s;
    animation-fill-mode:forwards;


`;

const WebsiteName = styled.div`
    font-size: 2.2vw;
    font-weight: bold;
    color: rgb(87,202,195);
    padding-right:59vw;
`

const NavigationButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 20%;
    background-color: white;
    padding-top:0.75vw;`;

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
export default Navbar