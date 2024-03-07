import React from 'react';
import styled, {keyframes} from 'styled-components'

const SlideUp = keyframes`
    from{
        transform: translate3d(1,1,1);
    }
    to{
        transform:translate3d(0,-100vh,0) rotateX(100deg);
    };
`;

const PreloaderContainer = styled.div`
    position:absolute;
    background-color:rgb(87,202,195);
    z-index:100;
    width:100%;
    height:100%;

    display:flex;
    justify-content:center;
    align-items:center;
    animation: ${SlideUp} 1s linear forwards;
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


const PreloaderText = styled.div`
    font-family:'Poppins', sans-serif;
    font-weight:bold;
    font-size:10vw;
    
    position:relative;
    color:rgb(87,202,195);
    -webkit-text-stroke: 0.2vw rgb(104,255,231);

    &:before{
        content: attr(data-text);
        position:absolute;
        height:100%;
        width:0;
        color:white;
        -webkit-text-stroke: 0.1vw rgb(104,255,231);
        border-right: 5px solid white;
        overflow:hidden;
        animation:${TypingEffect} 1s linear;
        animation-fill-mode:forwards;

    }
    
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