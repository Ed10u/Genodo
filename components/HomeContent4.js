import React,{useState,useEffect} from 'react';
import styled,{keyframes} from 'styled-components';




const HomeContent4 =()=>{
    const [style, setStyle] = useState({ opacity: 0, translateY: '300px' });

    useEffect(() => {
      const handleScroll = () => {
        const shouldBeVisible = window.scrollY > 1000;
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
            <CardWarpper>
                <LeftCards>
                    <LeftTopCard>
                        <Cardheading>
                        Central Search Bar
                        </Cardheading>
                        <CardContent>
                        GenoDo's central search bar is more than just a tool; it's the first step in a journey toward understanding and managing health. With intelligent autocomplete features and an extensive database, users can effortlessly navigate through a vast reservoir of diseases, symptoms, and wellness information, making informed health decisions easier than ever.
                        </CardContent>
                    </LeftTopCard>
                    <LeftBottomCard>
                    <Cardheading>
                    Featured Diseases
                        </Cardheading>
                        <CardContent>
                        This segment shines a light on prevalent and seasonal health issues, offering users not just disease information but also guidance on prevention, management, and treatment. Through "Disease of the Week/Month" features, GenoDo fosters greater public health awareness, highlighting both common ailments and rare conditions deserving attention.                        
                        </CardContent>
                    </LeftBottomCard>
                </LeftCards>
                <CenterCards>
                <CenterTopCard>
                        <Cardheading>
                        User Stories and Support
                        </Cardheading>
                        <CardContent>
                        By featuring real stories from those who've navigated health challenges, GenoDo builds a community of support and inspiration. Additional resources and support groups further ensure that no one has to face health questions alone.                        </CardContent>
                    </CenterTopCard>
                    <CenterBottomCard>
                    <Cardheading>
                    Interactive Content
                        </Cardheading>
                        <CardContent>
                        With tools like the Symptom Checker and visually rich infographics and videos, GenoDo turns complex medical information into engaging, understandable content. These resources are designed not just to inform but to enhance understanding and retention, making health education interactive and enjoyable.                        </CardContent>
                    </CenterBottomCard>
                </CenterCards>
                </CardWarpper>
                <RightCards>
                <RightCard>
                    <Cardheading>
                    Interactive Content
                        </Cardheading>
                        <CardContent>
                        With tools like the Symptom Checker and visually rich infographics and videos, GenoDo turns complex medical information into engaging, understandable content. These resources are designed not just to inform but to enhance understanding and retention, making health education interactive and enjoyable.                        </CardContent>
                    </RightCard>
                </RightCards>
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
    flex-direction: column;
    gap:2rem;
    align-items: center;
    height: 70vw;
    z-index: 2;
    position:relative;
`;


const TopHalfContainer = styled.div`
    width:90.9%;
    font-size:2.5vw;
    text-align:center;
    color:black;
    display:flex;
    flex-direction:row;
    gap:2rem;

    
    position: relative;

    opacity: ${props => props.opacity};
    transform: translateY(${props => props.$translateY});
    transition: all 1s linear;
`;

const Cardheading = styled.div`
  font-family: 'DM Sans', Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 3rem;
  line-height: 2.8rem;
  height:30%;
`;

const CardContent = styled.div`
  font-size: 14px;
  position: relative;

`;

const Card = styled.button`
  background-color: #B2DECA;
  width: 400px;
  display: flex;
  flex-direction: column;
  border-radius: 2rem;
  border-style: none;
  padding: 4rem 3rem;
  flex-shrink: 0;
  transition: transform 0.5s ease;
  position: relative;
  overflow: hidden;
  gap: 30px;
  transform-origin: bottom;

  &:hover {
    transform: scaleY(1.05);
  }
`;
const LeftCards = styled.div`
  display:flex;
  flex-direction:row;
  gap:2rem;

`
const LeftTopCard = styled(Card)`
  width:500px;
  background-color:#FBFDD2;
`
const LeftBottomCard = styled(Card)`
  width:300px;
  background-color:#B2DECA;

`
const CenterCards = styled.div`
display:flex;
flex-direction:row;
gap:2rem;
`
const CenterTopCard = styled(Card)`
background-color:#F5A091;

`
const CenterBottomCard = styled(Card)`
background-color:#A8DAF4;

`
const CardWarpper = styled.div`
display:flex;
flex-direction:column;
gap:2rem;
`
const RightCards = styled.div`
`
const RightCard = styled(Card)`
  display:flex;
  height:100%;
  background-color:#ABAEDB;

`


export default HomeContent4;