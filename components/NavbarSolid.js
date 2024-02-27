import React,{useState,useEffect} from 'react'
import styled from 'styled-components'

const NavbarSolid = () => {
  return (
    <>
    <Container>
        <Icon src='./icon.png'></Icon>
        <WebsiteName>GenoDo</WebsiteName>
        <NavigationButtonContainer>
            <Navigator href="/">Home</Navigator>
            <Navigator href = "/about">About</Navigator>
            <Navigator href = "/login">Login</Navigator>
        </NavigationButtonContainer>
    </Container>
    </>
  )
}

const Icon = styled.img`
    width:40px;
    height:40px;
`;

const Container = styled.div`
    width: 90vw;
    background-color: white;

    display: flex;
    justify-content: space-between;
    flex-direction: row;


    padding-top: 2vw;
    padding-bottom: 2vw;
    padding-right: 3vw;
    padding-left: 3vw;
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

export default NavbarSolid