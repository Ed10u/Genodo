import React,{useState,useEffect} from 'react';
import styled,{keyframes} from 'styled-components';
import {useRouter} from 'next/router';




const HomeContent3 =()=>{
    const router = useRouter();
    const [style, setStyle] = useState({ opacity: 0, translateY: '300px' });
    const [diseases, setDiseases] = useState([]);

    useEffect(() => {
        const diseaseKeywords = [
            "hypertension",
            "asthma",
            "depression",
            "influenza",
            "obesity",
            "arthritis",
            "common cold",
            "migraine",
            "eczema",
            "allergies",
            "anxiety",
            "gastroenteritis",
            "conjunctivitis",
            "bronchitis",
            "sinusitis",
            "dermatitis",
            "pneumonia",
            "gastritis",
            "chickenpox",
            "measles",
            "tonsillitis",
            "psoriasis",
            "osteoporosis",
            "thyroid disorders",
            "back pain",
            "anemia",
            "caries"
          ];          
          
          const fetchDiseaseInfo = async () => {
            const fetchedDiseases = [];
            const attemptedDiseases = new Set();
        
            while (fetchedDiseases.length < 10 && attemptedDiseases.size < diseaseKeywords.length) {
                const randomIndex = Math.floor(Math.random() * diseaseKeywords.length);
                const randomDisease = diseaseKeywords[randomIndex];


                if (attemptedDiseases.has(randomDisease)) {
                    continue;
                }
        
                attemptedDiseases.add(randomDisease); // Mark this disease as attempted
        
                const apiUrl = `https://clinicaltables.nlm.nih.gov/api/icd11_codes/v3/search?terms=${encodeURIComponent(randomDisease)}&ef=definition`;
                
                try {
                    const response = await fetch(apiUrl);
                    const data = await response.json();
                    console.log(data[3])
                    if (data[3] && data[3][0] && data[3][0][1] && data[2].definition && data[2].definition[0] !== "") {
                            fetchedDiseases.push({
                            name: data[3][0][1],
                            definition: data[2].definition[0]
                        });
                        }
                    
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            }
            setDiseases(fetchedDiseases);
        };

        fetchDiseaseInfo();
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
                <CardScrollWrapper>
                {diseases.map((disease, index) => (
                            <Card key={index} bgColor={cardColors[index % cardColors.length]}>
                                <Cardheading>
                                    {disease.name}
                                </Cardheading>
                                <CardContent>
                                    {disease.definition}
                                </CardContent>
                            </Card>
                        ))}
                </CardScrollWrapper>
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
    gap:20%;
    align-items: center;
    
    height: 50vw;
    z-index: 2;
    position:relative;
    padding-top:15%;
`;


const TopHalfContainer = styled.div`
    width:100%;
    font-size:2.5vw;
    text-align:center;
    color:black;
    display:flex;
    flex-direction:column;
    justify-content:center;

    
    position: relative;
    gap: 2rem;

    opacity: ${props => props.opacity};
    transform: translateY(${props => props.$translateY});
    transition: all 1s linear;
`;
const CardScrollWrapper = styled.div`
    display: flex;
    position: relative;
    padding: 2rem 2rem 2rem 2rem;
    gap: 2rem;
    height:500px;

    overflow-x: scroll;
    overflow-y: hidden;
`
const slideIn = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(30%);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateY(30%);
    opacity: 1;
  }
  to {
    transform: translateY(100%);
    opacity: 0;
  }
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
  width: 80%;
  height:70%;
  font-size: 20px;
  position: absolute;
  animation: ${slideOut} 1s forwards;

`;
const cardColors = [
  "#4A90E2",
  "#FFFFFF",
  "#68C3A3",
  "#F0F2F4",
  "#F5F5DC"
];
const Card = styled.button`
  width:30%;

  background-color: ${props => props.bgColor};
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
    & ${CardContent} {
      animation: ${slideIn} 1s ease forwards;
    }
  }
`;




export default HomeContent3;