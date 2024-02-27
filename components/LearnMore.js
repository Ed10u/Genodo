import React from 'react'
import styled from 'styled-components'
import Link from "next/link";


const LearnMore = () => {
  return (
    <>
    <HomePageContainer>
        <ContentContainer>
           <Content>Genetic Testing</Content>
           <SubContent>Our mission at GenoDo is to empower individuals with actionable genetic insights to lead healthier, longer lives. By leveraging cutting-edge technology and scientific research, we aim to make personalized health accessible to everyone. We believe in the transformative power of genetic data to not only predict health risks but also to provide proactive solutions for a better quality of life.</SubContent>
           <SubContent>"GenoDo envisions a future where every health decision is informed by personal genetic data. Our vision is to be at the forefront of personalized medicine, where our innovations help bridge the gap between genetic information and actionable health strategies. We aspire to create a world where individuals can preemptively address health concerns, diseases are caught in their nascent stages, and everyone has access to personalized health optimization plans."</SubContent>

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