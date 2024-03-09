import React from 'react'
import styled from 'styled-components'


const HomeContent2 =()=>{
    return (
        <>
        <HomePageContainer2>
            <TopHalfContainer>
                GenoDo is designed to democratize access to a wealth of information on a broad spectrum of diseases.
            </TopHalfContainer>
            <BottomHalfContainer>

            </BottomHalfContainer>
        </HomePageContainer2>
        </>
    );
    };

const HomePageContainer2 = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 90.9vw;

    z-index: 2;
    position:relative;

    padding-top: 10vw;
    padding-bottom: 20vw;
    padding-right: 4vw;
    padding-left: 4vw;
    
`;
const TopHalfContainer = styled.div`

`;
const BottomHalfContainer =styled.div`
`;


export default HomeContent2;