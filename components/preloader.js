import React from 'react';
import styled, {keyframes} from 'styled-components'

const SlideUp = keyframes`
    from{
        transform: translate3d(0,0,0);
    }
    to{
        transform:translate3d(0,-100vh,0) rotateX(90deg);
    };
`;

const PreloaderContainer = styled.div`
    position:fixed;
    background-color:white;
    z-index:100;
    width:100%;
    height:100%;
    overflow:hidden;

    display:flex;
    justify-content:center;
    align-items:center;
    animation: ${SlideUp} 1.3s ease-out forwards;
    animation-delay:1.5s;
`

const TypingEffect = keyframes`
    from{
        width:0;
    }
    to{
        width:100%;

    }
`;

const SlideIcon = keyframes`
    0%
    {
        transform: translate3d(0,0,0);
    }
    100%
    {
        transform:translate3d(0,71vh,0) rotateX(-30deg);
    };
`;


const PreloaderText = styled.div`
    font-family:'Poppins', sans-serif;
    font-weight:bold;
    font-size:6vw;
    
    position:absolute;
    color:white;
    -webkit-text-stroke: 0.2vw rgb(87,202,195);
    
    &:before{
        content: attr(data-text);
        position:absolute;
        height:100%;
        width:0;
        color:rgb(87,202,195);
        -webkit-text-stroke: 0.1vw rgb(87,202,195);
        border-right: 5px solid rgb(87,202,195);
        overflow:hidden;
        animation:${TypingEffect} 1s linear;
        animation-fill-mode:forwards;

    }
    animation:${SlideIcon} 0.56s linear forwards 1.5s;

    
`;



const Preloader = () => {
    
    return(
        <>
        <PreloaderContainer>
            <PreloaderText data-text="GenoDo">
                GenoDo
            </PreloaderText>
        </PreloaderContainer>
        </>
    )
}

export default Preloader