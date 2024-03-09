import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContentPage2 from"@/components/HomeContent2";
import Preloader from "@/components/preloader";
import styled,{keyframes} from 'styled-components';
import React,{useEffect,useState} from 'react';
import {useRouter} from 'next/router';
import {useScrollValue} from '@/components/customHook/scrollValue'


export default function index() {
  const router = useRouter();
  const ValueOfScroll = useScrollValue();
  const Register= async ()=>{
      router.push('/login')
  };
  
  return (
    <>
       <Preloader/>
        <Navbar />
        <HomePageContainer>
          <VideoBackground $ValueOfScroll={ValueOfScroll} autoPlay muted loop>
            <source src = './BackGdVideo.mp4' type="video/mp4"/>
          </VideoBackground>
        <ContentContainer $ValueOfScroll={ValueOfScroll}>
          <TextContainer $ValueOfScroll={ValueOfScroll}>
           <Content>Explore health with a click</Content>
           </TextContainer>
           <TextContainer2 $ValueOfScroll={ValueOfScroll}>
           <Content2>Mapping diseases in a glance.</Content2>
           </TextContainer2>
           <SubContent>Genodo offers a portal to understanding the large variety of diseaes.</SubContent>
           <ButtonContainer>
            <ContentInput placeholder="Enter your Email"/>
            <ContentButton onClick={Register}>
                Get Started
            </ContentButton>
           </ButtonContainer>
        </ContentContainer>
        </HomePageContainer>
        <ContentPage2 />
        <Footer />
        
    </>
  )
}

const VideoBackground = styled.video`
  width: 100%;
  height: auto;
  position:absolute;
  background-color: #f4fbfb;
  opacity: ${props=>Math.max(1-0.01*Math.min(props.$ValueOfScroll,90)*100/90,0.3)};

  min-width:100%
  min-height:100%
  z-index:-1;
`;

const SlideImg = keyframes`
from{
    transform:translate3d(0,100vh,0) rotateX(100deg);
    opacity:0;
}
to{
    transform:translate3d(0,0,0);
    opacity:1;
}
`;
const HomePageContainer = styled.div`
    font-family: 'poppins-bold', sans-serif !important;
    display: flex;
    position:sticky;
    top:0;
    
    justify-content: center;
    flex-direction: row;
    overflow:hidden;

    width: 90.9vw;
    height: 49vw;
    background-color: #f4fbfb;

    padding-bottom: 2vw;
    padding-right: 4vw;
    padding-left: 4vw;

    animation: ${SlideImg} 1.5s ease-out;
    animation-delay: 0.8s; 
    `;

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
const TextContainer = styled.div`
  opacity: ${props=>1-0.01*Math.min(props.$ValueOfScroll,10)*100/10};
;

`
const TextContainer2 = styled.div`
opacity: ${props=>0.01*Math.min(props.$ValueOfScroll-10,10)*100/10};
`
const Content = styled.div`
    font-size: 50px;
    font-weight:bold;    
    padding-bottom:1vw;
    opacity:0;
    color: white;
    width:100%;

    animation: ${SlideContent} 1s ease-in-out;
    animation-duration:1s;
    animation-delay:1.7s;
    animation-fill-mode:forwards;

`;
const Content2 = styled(Content)`

`
//contains all contents
const ContentContainer = styled.div`
    width: 60%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-right:40%;
    opacity: ${props=>1-0.01*Math.min(props.$ValueOfScroll-30,20)*100/20};

`;
    //translate based on the scroll
    //value (oldVal-oldMin) *newRange/oldRange+newMin
//
//contains input and the button
const ButtonContainer = styled.div`
    text-align:center;
    width:60%;
    display:flex;
    flex-direction:row;
    opacity:0;
    
    animation: ${SlideContent} 1s ease-in-out;
    animation-delay:1.7s;
    animation-duration:1.7s;
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
    font-size:17px;
    padding-left:15px;

    &:focus{
        outline:none;
        border:none;

    }


`//the text under main text
const SubContent = styled.div`
    width:80%;
    padding-bottom:3vw;
    font-size:1.5vw;
    font-family:"FreeMono",san-serf;
    color: black;
    opacity:0;

    animation: ${SlideContent} 1s ease-in-out;
    animation-delay:1.4s;
    animation-duration:1.7s;
    animation-fill-mode:forwards;

`