import styled,{keyframes} from 'styled-components'
import React from 'react'
import {useRouter} from 'next/router'

const HomeContent = () => {
    const router = useRouter();

    const Register= async ()=>{
        router.push('/login')
    }
  return (
    <>
    <HomePageContainer>
        <ContentContainer>
           <Content>Get to know the diseases for a Healthier Tomorrow</Content>
           <SubContent>Genodo offers a portal to understanding the large variety of diseaes.</SubContent>
           <ButtonContainer>
            <ContentInput placeholder="Enter your Email"/>
            <ContentButton onClick={Register}>
                Get Started
            </ContentButton>
           </ButtonContainer>
        </ContentContainer>
        <HomeImg src='./doctor.webp' alt = "Article Cover"/> 
    </HomePageContainer>
    </>
  );    
};

const slideImg = keyframes`
from{
    transform:translateY(100%);
    opacity:0;
}
to{
    transform:translateY(0);
    opacity:1;
}
`;
const HomePageContainer = styled.div`
    display: flex;
    position:relative;
    justify-content: center;
    flex-direction: row;

    width: 90.9vw;
    background-color: #f4fbfb;

    padding-top: 2vw;
    padding-bottom: 10vw;
    padding-right: 4vw;
    padding-left: 4vw;
    
    animation:${slideImg} 1s ease-in-out;
    animation-fill-mode:forwards;
    `;  

const HomeImg = styled.img`
    width: 550px;
    margin-left:auto;
    padding-top: 1vw;
    opacity:0;

    animation:${slideImg} 1s ease-in-out;
    animation-delay:0.4s;
    animation-duration:2s;
    animation-fill-mode:forwards;
`;
//
const SlideContent = keyframes`
    from{
        transform:translateX(-100%);
        opacity:0;

    }
    to{     
        transform:translateY(0);
        opacity:1;
    }
`
const Content = styled.div`
    font-family:"FreeMono", sans-serif;
    font-size: 57px;
    font-weight:bold;    
    padding-bottom:1vw;
    opacity:0;

    animation: ${SlideContent} 1s ease-in-out;
    animation-duration:1s;
    animation-delay:0.4s;
    animation-fill-mode:forwards;

`;
    
//contains all contents
const ContentContainer = styled.div`
    font-family:"bold", sans-serif;
    width: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-left: 9vw;

`;
//contains input and the button
const ButtonContainer = styled.div`
    text-align:center;
    width:80%;
    display:flex;
    flex-direction:row;
    opacity:0;
    
    animation: ${SlideContent} 1s ease-in-out;
    animation-delay:0.4s;
    animation-duration:2s;
    animation-fill-mode:forwards;

`//the button
const ContentButton = styled.button`
    width:30%;
    margin-left:8px;
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
    width:70%;
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


`//the text under main text
const SubContent = styled.div`
    width:80%;
    padding-bottom:3vw;
    font-size:20px;
    font-family:"FreeMono",san-serf;
    color: #696969;
    opacity:0;

    animation: ${SlideContent} 1s ease-in-out;
    animation-delay:0.4s;
    animation-duration:1.5s;
    animation-fill-mode:forwards;

`



export default HomeContent;