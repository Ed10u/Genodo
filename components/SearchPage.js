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
            window.location.href = '/login';
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
      const apiUrl = `https://clinicaltables.nlm.nih.gov/api/icd11_codes/v3/search?terms=${encodeURIComponent(searchTerm)}`;
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          setSearchTermHelper(data[3]);//the name for the Searched Items
          console.log(data[3]);
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
      await addDoc(collection(db,"searchHistory"),{
        Email: auth.currentUser.email,
        History: searchTerm,
        timestamp:new Date(),
      });
    }catch(error){
      console.error("Error:",error)
    }


    setSearchTermHelper([]);
    if(searchTerm.trim()){
      const apiUrl = `https://clinicaltables.nlm.nih.gov/api/icd11_codes/v3/search?terms=${encodeURIComponent(searchTerm)}&ef=definition`;
      fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setresultListOfItem(data[3])
        
        console.log(data[3]); //the link for the searched Item
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
        <ButtonContainer>
          <ContentInput
            placeholder="Enter disease name"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <ContentButton onClick={handleSearch}>Search</ContentButton>
        </ButtonContainer>
        <CenteredContainer>
      </CenteredContainer>
          <ResultsContainer>
            {SearchTermHelper.map((item, index) => (
              <ResultItem key={index}>{item[1]}</ResultItem>
            ))}
          </ResultsContainer>
          <SearchedResultsContainer>
            {(Array.isArray(resultListOfItem) ?resultListOfItem:[]).filter(item => item[0] && item[0].length > 0).map((item, index) => (
            <Card key={index}>
              <CardInner>
                <CardFront>
                  <CardImg>
                  <ImageGallery searchQuery={item[0][1]}></ImageGallery>
                  </CardImg>
                  <CardText>
                  {item[0][1]}
                  </CardText>
                </CardFront>
                <CardBack>
                  <a href={Array.isArray(item[0]) ? item[0][0] : '#'} target="_blank" rel="noopener noreferrer">
                    Click me for Details
                  </a>
                </CardBack>
              </CardInner>
            </Card>
      ))}
          </SearchedResultsContainer>
      </HomePageContainer>
    </>
  );
  
};

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ResultItem = styled.div`
  background-color: #eef;
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
`;

const HomePageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  background-color: #f4fbfb;
  gap:20px;
  
`;

const ButtonContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 20px;
  align-items: center;

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
  height: 100%;
  background-color: #d9ebf4;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  padding-left: 15px;

  &:focus {
    outline: none;
  }
`;
const CenteredContainer =styled.div`
  display: flex;
  justify-content: center;
`
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
  height:60%;
  perspective: 1000px;

  opacity:0;

  animation:${slideCard} 1s ease-in-out;
  animation-delay:0.4s;
  animation-duration:2s;
  animation-fill-mode:forwards;
`;

const CardInner = styled.div`
  width: 100%;
  height: 100%;
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
  display:flex;
  flex-direction:column;
  background-color:rgb(87, 202, 195);
  color: #fff;
  border: 10px solid rgb(87, 202, 195);
  transform: rotateY(0deg);
`;

const CardBack = styled(CardFace)`
  background-color: #79D4FF;
  color: #fff;
  border: 10px solid #79D4FF;
  transform: rotateY(180deg);
  text-align: center;
  font-size:40px;
`;



export default SearchPage;
