import React, { useState,useEffect } from 'react';
import styled,{keyframes} from 'styled-components';
import {onAuthStateChanged } from 'firebase/auth';
import {auth,db} from '../library/firebaseConfig';
import { collection, addDoc} from 'firebase/firestore'
import ImageGallery from './customHook/ImageGallery';



const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [SearchTermHelper, setSearchTermHelper] = useState([]);
  const [resultListOfItem, setresultListOfItem] = useState([]);
  const [user,setUser] = useState({});

  useEffect(()=>{
    const Change=onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
        if(!user){
        } else {
          
        }
    })
    return ()=> Change();
  })
 
  const handleInputChange = (e) => {
    setresultListOfItem([]);
    setSearchTermHelper([]);
    const searchTerm = e.target.value;
    console.log(searchTerm);
    setSearchTerm(searchTerm);

    if (searchTerm.trim()) {
      const apiUrl = `https://clinicaltables.nlm.nih.gov/api/icd11_codes/v3/search?terms=${encodeURIComponent(searchTerm)}&ef=definition`;
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          setSearchTermHelper(data[3]);//the name for the Searched Items
        })
        .catch(error => {
          console.error("Error fetching data");
          setSearchTermHelper([]);
        })

    } else {
      setSearchTermHelper([]);
    }
  };
  
  const handleSearch = async (event) => {
    event.preventDefault();
    try{
      if(auth.currentUser){
      await addDoc(collection(db,"searchHistory"),{
        Email: auth.currentUser.email,
        History: searchTerm,
        timestamp:new Date(),
      });
      }else{

      }
    }catch(error){
      console.error("Error:",error)
    }


    setSearchTermHelper([]);
    if(searchTerm.trim()){
      const apiUrl = `https://clinicaltables.nlm.nih.gov/api/icd11_codes/v3/search?terms=${encodeURIComponent(searchTerm)}&ef=browserUrl`;
      fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const itemsWithUrls = data[3].map((item,index)=>({
          name: item[1],
          url:data[2].browserUrl[index]
        }));
        setresultListOfItem(itemsWithUrls)
        console.log(data); //the link for the searched Item
      })
      .catch(error => {
        console.error("Error fetching data");
      })

  } else {
  }
  };
  
  return (
    <>
      <HomePageContainer>
        <Title>
          Search
        </Title>
        <ButtonContainer>
          <ContentInput
            placeholder="Enter disease name"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <ContentButton onClick={handleSearch}>Search</ContentButton>
        </ButtonContainer>
          <ResultsContainer>
            {SearchTermHelper.map((item, index) => (
              <ResultItem key={index}>{item[1]}</ResultItem>
            ))}
          </ResultsContainer>
          <SearchedResultsContainer>
          {resultListOfItem.map((item, index) => (
            <Card key={index}>
              <CardInner>
                <CardFront>
                  <CardImg>
                  </CardImg>
                  <CardText>
                  {item.name}                  
                  </CardText>
                </CardFront>
                <CardBack>
                {item.url ? (
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    Click me for Details
                  </a>
                  ) : (
                   <span>No Details Available</span>
                  )}
                </CardBack>
              </CardInner>
            </Card>
      ))}
          </SearchedResultsContainer>
      </HomePageContainer>
    </>
  );
  
};
const SlideContent = keyframes`
    from{
        transform:translateX(-100%);
        opacity:0;

    }
    to{     
        transform:translateY(0);
        opacity:1;
    }
`

const Title = styled.div`
    font-size: 100px;
    font-weight:bold;    
    padding-bottom:1vw;
    opacity:0;
    color: White;

    padding-top:15%;
    z-index:2;


    animation: ${SlideContent} 1s ease-in-out;
    animation-duration:1s;
    animation-delay:1.7s;
    animation-fill-mode:forwards;

`;

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position:relative;
  width:40%;
  height:10em;
  aligh-items:left;
  `; 

const ResultItem = styled.div`
  width:63%;
  background-color: #d9ebf4;
  padding: 10px;
  z-index:2;
`;
const SlideImg = keyframes`
from{
    transform:translate3d(0,100vh,0) rotateX(100deg);
    opacity:0;
}
to{
    transform:translate3d(0,0,0);
    opacity:1;
}
`;

const HomePageContainer = styled.div`
  background-image: url('/searchPageBg.jpg');
  background-size: cover;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height:100%;
  width:100%;
  align-items: center;
  overflow:hidden;
  
  padding-bottom:20%;
  
  animation: ${SlideImg} 1.5s ease-out;
  animation-delay: 0.8s; 

  &::before{
    content: "";
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index:1;
    
  }
`;

const ButtonContainer = styled.div`
  width: 40%;
  height:100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  z-index:2;
  opacity:0;

  animation: ${SlideContent} 1s ease-in-out;
    animation-duration:1s;
    animation-delay:2s;
    animation-fill-mode:forwards;
`;

const ContentButton = styled.button`
  width: 50%;
  height: 3vw;
  border: none;
  color: white;
  font-size: 18px;
  background-color: rgb(87, 202, 195);
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #0D98BA;
    transform: scale(1.008);
  }
`;

const ContentInput = styled.input`
  width: 100%;
  height: 3vw;
  background-color: #d9ebf4;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  padding-left: 15px;

  &:focus {
    outline: none;
  }
`;

const SearchedResultsContainer = styled.div`
  display:flex;
  jusfity-content:center;
  flex-direction: row;
  width:80%;
  height:90%;
  gap:5%

`
const slideCard = keyframes`
from{
    transform:translateY(100%);
    opacity:0;
}
to{
    transform:translateY(0);
    opacity:1;
}
`;

const Card = styled.div`
  width: 20%;
  height:50vh;
  perspective: 1000px;
  
  z-index:2;

  opacity:0;

  animation:${slideCard} 1s ease-in-out;
  animation-delay:0.4s;
  animation-duration:2s;
  animation-fill-mode:forwards;
`;

const CardInner = styled.div`
  width: 100%;
  height: 50vh;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.999s;

  ${Card}:hover & {
    transform: rotateY(180deg);
  }
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  border-radius: 10px;

`;
const CardImg = styled.div`
  display:flex;
  background-size: cover;
  height:70%;
  width:100%;
`
const CardText = styled.div`
  background-color: rgb(87, 202, 195);
  heigh:30%;
  width:100%;
  text-align:center;

`

const CardFront = styled(CardFace)`
  height:100%;
  display:flex;
  flex-direction:column;
  background-color:rgb(87, 202, 195);
  color: #fff;
  border: 10px solid rgb(87, 202, 195);
  transform: rotateY(0deg);
`;

const CardBack = styled(CardFace)`
  height:100%;
  background-color: #79D4FF;
  color: #fff;
  border: 10px solid #79D4FF;
  transform: rotateY(180deg);
  text-align: center;
  font-size:40px;
`;



export default SearchPage;
