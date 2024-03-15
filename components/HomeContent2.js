import React,{useState,useEffect} from 'react';
import styled,{keyframes} from 'styled-components';
import {useScrollValue} from '@/components/customHook/scrollValue'
import {useRouter} from 'next/router';



const HomeContent2 =()=>{
    const router = useRouter();

    const ScrollValue = useScrollValue();

    const [style, setStyle] = useState({ opacity: 0});
    const [styleContent2, setstyleContent2] = useState({ opacity: 0});


    useEffect(() => {
      const handleScroll = () => {
        const shouldScrollDown = window.scrollY > 1500&&window.scrollY<2500;
        const showContent1 = window.scrollY > 540&&window.scrollY<1200;
        if (showContent1) {
          setStyle({ opacity: 1, translateY: '0px' });
        } else {
          setStyle({ opacity: 0, translateY: '50px' });
        }
        if (shouldScrollDown) {
          setstyleContent2({ opacity: 1, translateY: '0px' });
        }
        else {
          setstyleContent2({ opacity: 0, translateY: '50px' });
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
        <HomePageContainer2>
            <TopHalfContainer opacity={style.opacity} $translateY={style.translateY}>
                <ContentLine>GenoDo is designed for YOU.</ContentLine>
                <ContentLine>A wealth of information.</ContentLine>
                <ContentLine>On a broad spectrum of diseases.</ContentLine>
                <SubContent>"GenoDo" is envisioned as a groundbreaking digital platform dedicated to empowering individuals with comprehensive and accessible disease information.  At the heart of GenoDo's mission is the seamless integration of advanced search capabilities, user-centric design, and a wealth of medical knowledge, all aimed at demystifying health concerns for a global audience.</SubContent>
            </TopHalfContainer>
            <DiscrpitionWrapper opacity={styleContent2.opacity} $translateY={styleContent2.translateY}>
            <ContentLine>GenoDo is an innovative health management platform</ContentLine>
            <SubContent>It is designed to empower individuals in their health and wellness journey. The app is divided into several key areas, each serving a unique purpose in the user's health exploration journey.</SubContent>
            </DiscrpitionWrapper>
            
        </HomePageContainer2>
        </>
    );
    };


const HomePageContainer2 = styled.div`
    font-family: 'poppins-bold', sans-serif !important;
    font-weight: bold;
    display: flex;
    flex-direction:column;
    align-items: center;
    z-index: 2;
    position:relative;
    padding-top:15vw;
    height:150rem;
`;

const SubContent = styled.div`
    width:40%;
    font-size:1.5rem;
    font-weight:normal;
    padding-top:2rem;
`
const TopHalfContainer = styled.div`
    width:60%;
    font-size:2.5vw;
    text-align:center;
    color:black;
    align-items:center;
    top:30%;
    display:flex;
    flex-direction:column;
    position:fixed;
    opacity: ${props => props.opacity};
    transform: translateY(${props => props.$translateY});
    transition: all 0.7s linear;
`;
//(oldValue-oldMin)*newRange/oldRange+newMin

const DiscrpitionWrapper = styled(TopHalfContainer)`
    opacity: ${props => props.opacity};
    transform: translateY(${props => props.$translateY});
    transition: all 0.7s linear;
    top:30%;
`
const ContentLine = styled.div`
`

export default HomeContent2;