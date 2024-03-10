import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContentPage2 from"@/components/HomeContent2";
import Preloader from "@/components/preloader";
import styled,{keyframes} from 'styled-components';
import React,{useEffect,useState} from 'react';
import {useRouter} from 'next/router';
import {useScrollValue} from '@/components/customHook/scrollValue'
import Cards from"@/components/HomeContent3";



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
           <ButtonContainer>
            <ContentInput placeholder="Enter the disease name"/>
            <ContentButton onClick={Register}>
                Get Started
            </ContentButton>
           </ButtonContainer>
        </ContentContainer>
        </HomePageContainer>
        <ContentPage2 />
        <Cards />
        <Footer />
        
    </>
  )
}

const VideoBackground = styled.video.attrs(props => ({
    style: {
      opacity: 1 - 0.01 * Math.min(props.$ValueOfScroll, 98) * 100 / 98,
    }
  }))`
    width: 100%;
    height: auto;
    position: absolute;
    background-color: #f4fbfb;
    min-width: 100%;
    min-height: 100%;
    z-index: -1;
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
        opacity: ${props => {
        const startFadeAt = 0;
        const endFadeAt = 10;
        const scroll = Math.min(Math.max(props.$ValueOfScroll, startFadeAt), endFadeAt);
        return (1-(scroll - startFadeAt) / (endFadeAt - startFadeAt));
    }};
;

`
const TextContainer2 = styled.div`
    opacity: ${props => {
        const startFadeAt = 10;
        const endFadeAt = 20;
        const scroll = Math.min(Math.max(props.$ValueOfScroll, startFadeAt), endFadeAt);
        return ((scroll - startFadeAt) / (endFadeAt - startFadeAt));
    }};
`
const Content = styled.div`
    font-size: 60px;
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
    width: 100%;
    display: flex;
    justify-content: center;
    align-items:center;

    flex-direction: column;
    opacity: ${props => {
        const startFadeAt = 30;
        const endFadeAt = 50;
        const scroll = Math.min(Math.max(props.$ValueOfScroll, startFadeAt), endFadeAt);
        return 1 - ((scroll - startFadeAt) / (endFadeAt - startFadeAt));
    }};
`;
    //translate based on the scroll
    //value (oldVal-oldMin) *newRange/oldRange+newMin
//
//contains input and the button
const ButtonContainer = styled.div`
    text-align:center;
    width:40%;
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