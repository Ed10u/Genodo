import React from 'react'
import styled from 'styled-components'
const Footer = () => {
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
    align-self:center;
`
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items:center;
    width: 90vw;
    background-color: #212529;
    padding-top: 2vw;
    padding-bottom: 2vw;
    padding-right: 5vw;
    padding-left: 3.8vw;
`

const WebsiteName = styled.div`
    font-size: 2.2vw;
    font-weight: bold;
    color: rgb(87,202,195);
    align-self:center;
    padding-top:35px;
`

const NavigationButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 20%;
    background-color: #212529;
    padding-top:0.75vw;`

const Navigator = styled.a`
    font-size:1.3vw;
    font-weight: bold;
    padding-top:50px;
    padding-bottom:40px;
    color: white;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    text-decoration:none;

    &:hover{
        transform: scale(1.2);
    }`

export default Footer