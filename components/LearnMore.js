import React from 'react'
import styled from 'styled-components'
import Link from "next/link";


const LearnMore = () => {
  return (
    <>
    <HomePageContainer>
        <ContentContainer>
           <Content>Definition</Content>
           <SubContent>A disease is a condition that impairs the normal functioning of the body or mind. Diseases can affect any part of the body and can have various causes, including pathogens (like bacteria, viruses, and fungi), genetic mutations, environmental factors, lifestyle choices, and more.</SubContent>
           <Content>Causes</Content>
           <SubContent>The causes of diseases are as diverse as the diseases themselves. They can be classified into infectious causes (caused by pathogens), genetic causes (inherited or mutations), environmental causes (exposure to chemicals, radiation, etc.), and lifestyle causes (such as diet, physical inactivity, and smoking).</SubContent>
           <Content>Symptoms</Content>
           <SubContent>Symptoms are the signs or effects of a disease that are noticeable to the patient. These can range from mild to severe and vary widely depending on the disease. Common symptoms include fever, fatigue, pain, dizziness, and changes in weight or appetite, among others.</SubContent>

        </ContentContainer>
    </HomePageContainer>
    </>
  );    
};

const HomePageContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 90vw;
    background-color: #f4fbfb;
    padding-top: 2vw;
    padding-bottom: 10vw;
    padding-right: 4vw;
    padding-left: 4vw;
    
`;
//
const Content = styled.div`
    font-family:"FreeMono", sans-serif;
    font-size: 27px;
    font-weight:bold;    
    padding-bottom:5vw;
    
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


//the text under main text
const SubContent = styled.div`
    width:80%;
    padding-bottom:3vw;
    font-size:20px;
    font-family:"FreeMono",san-serf;
    color: #5A5A5A;
`


export default LearnMore;