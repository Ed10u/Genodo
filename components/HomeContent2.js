import React,{useState,useEffect} from 'react';
import styled,{keyframes} from 'styled-components';
import {useScrollValue} from '@/components/customHook/scrollValue'
import {useRouter} from 'next/router';



const HomeContent2 =()=>{
    const router = useRouter();

    const ScrollValue = useScrollValue();

    const [style, setStyle] = useState({ opacity: 0, translateY: '50px' });
    const Register= async ()=>{
        router.push('/login')
    };

    useEffect(() => {
      const handleScroll = () => {
        const shouldBeVisible = window.scrollY > 490;
        if (shouldBeVisible) {
          setStyle({ opacity: 1, translateY: '0px' });
        } else {
          setStyle({ opacity: 0, translateY: '50px' });
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
        </HomePageContainer2>
        </>
    );
    };


const HomePageContainer2 = styled.div`
    font-family: 'poppins-bold', sans-serif !important;
    font-weight: bold;
    display: flex;
    justify-content: center;

    z-index: 2;
    position:relative;
    padding-top:15vw;
    height:17rem;
`;

const SubContent = styled.div`
    width:60%;
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

    display:flex;
    flex-direction:column;

    opacity: ${props => props.opacity};
    transform: translateY(${props => props.$translateY});
    transition: all 1.5s linear;
`;
const ContentLine = styled.div`
`

export default HomeContent2;