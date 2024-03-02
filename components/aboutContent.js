import React from 'react'
import styled from 'styled-components'

const HomeContent = () => {
  return (
    <>
    <HomePageContainer>
        <ContentContainer>
           <Content>About GenoDo</Content>
           <SubContentTitle>Empowering Your Health with Information</SubContentTitle>
           <SubContent>At GenoDo, we believe that knowledge is the first step toward a healthier tomorrow. Our mission is to provide easy access to comprehensive information about various diseases, their symptoms, treatments, and preventive measures. Whether you're a healthcare professional, a patient, or someone looking to stay informed, GenoDo is your go-to resource for reliable, up-to-date disease information.</SubContent>
           <SubContentTitle>Our Features</SubContentTitle>
           <SubContent>Disease Search Engine: Instantly search for diseases by name to find detailed descriptions, symptoms, causes, and available treatments.</SubContent>
           <SubContent>User-Friendly Interface: Our platform is designed with you in mind, ensuring that you can easily navigate and find the information you need without hassle.</SubContent>
           <SubContent>Trusted Sources: All the information provided through GenoDo is meticulously sourced from reputable medical databases and institutions, ensuring that you receive accurate and current data.</SubContent>
           <SubContent>Educational Resources: Beyond disease information, we offer resources aimed at promoting general health and well-being, empowering you to take charge of your health.</SubContent>

        </ContentContainer>
    </HomePageContainer>
    </>
  );    
};

const SubContentTitle = styled.div`
    font-weight:bold;
    font-size:20px;
`
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


export default HomeContent;