import React from 'react'
import styled from 'styled-components'


const HomeContent2 =()=>{
    return (
        <>
        <HomePageContainer2>
        <HomeImg2 src='./DNA.webp' alt = "Article Cover"/> 
        <ContentContainer2>
        <Content2>What is a genetic testing?</Content2>
        <SubContent2>A genetic testing is a medical test that identifies changes in chromosomes, genes, or proteins. The primary purpose of these tests is to find genetic disorders, assess the risk of developing certain diseases, and determine genetic predisposition to various conditions. Gene tests can be used for a variety of purpose</SubContent2>
        <ButtonContainer2>
            <LearnMore href="/learnMore">
                learn more
            </LearnMore>
        </ButtonContainer2>
        </ContentContainer2>
        </HomePageContainer2>
        </>
    );
    };

const HomePageContainer2 = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 90vw;
    background-color: white;
    padding-top: 10vw;
    padding-bottom: 20vw;
    padding-right: 4vw;
    padding-left: 4vw;
    
`;
const HomeImg2 = styled.img`
    border-radius:8 px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 400px;
    margin-left:auto;
    padding-right: 10vw;
`;
//
const Content2 = styled.div`
    font-family:"FreeMono", sans-serif;
    font-size: 47px;
    font-weight:bold;    
    padding-bottom:1vw;
    
`;
//contains all contents
const ContentContainer2 = styled.div`
    font-family:"bold", sans-serif;
    width: 45%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-left: 1vw;
    padding-right:10vw;

`;
//contains input and the button
const ButtonContainer2 = styled.div`
    text-align:center;
    width:80%;
    display:flex;
    flex-direction:row;
    
`//the button
const LearnMore = styled.a`
    border:none;
    color:Blue;
    font-size:18px;
    text-decoration:underline;
    border-radius:6px; /* round boder */
    cursor: pointer;
    transition: 0.3s ease-in-out;
    &:hover{
        transform: scale(1.008);

    }
    
`//the text under main text
const SubContent2 = styled.div`
    width:80%;
    padding-bottom:3vw;
    font-size:22px;
    font-family:"FreeMono",san-serf;
    color: #696969;
`

export default HomeContent2;