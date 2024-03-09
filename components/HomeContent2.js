import React from 'react';
import styled from 'styled-components';
import {useScrollValue} from '@/components/customHook/scrollValue'

const HomeContent2 =()=>{
    const ScrollValue = useScrollValue();
    return (
        <>
        <HomePageContainer2>
            <TopHalfContainer $ValueOfScroll={ScrollValue}>
                <ContentLine>GenoDo is designed for YOU</ContentLine>
                <ContentLine>A wealth of information</ContentLine>
                <ContentLine>On a broad spectrum of diseases.</ContentLine>
            </TopHalfContainer>
            <BottomHalfContainer>
                <Cards></Cards>
            </BottomHalfContainer>
        </HomePageContainer2>
        </>
    );
    };

const HomePageContainer2 = styled.div`
    font-family: 'poppins-bold', sans-serif !important;
    font-weight: bold;
    display: flex;
    justify-content: center;
    flex-direction: columne;


    width: 90.9vw;
    height: 90vw;

    z-index: 2;
    position:relative;
`;
const TopHalfContainer = styled.div`
    width:60%;
    font-size:2.5vw;
    text-align:right;
    color:black;
    padding-left:8vw;

    opacity: ${props=>0.01*Math.min(props.$ValueOfScroll-50,40)*100/40};

`;
const ContentLine = styled.div`
`
const BottomHalfContainer =styled.div`
`;

const Cards = styled.div`

`;

export default HomeContent2;