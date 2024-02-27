import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import {onAuthStateChanged,signOut } from 'firebase/auth';
import {auth} from '../library/firebaseConfig';
import { CohereClient } from 'cohere-ai';



const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [user,setUser] = useState({});

  const [coherePrediction, setCoherePrediction] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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
  
  const fetchCoherePrediction = async () => {
    if (!searchTerm.trim()) return; // Check if the searchTerm is not empty
  
    setIsLoading(true);
    try {
        const cohere=new CohereClient({
            token:"9HYNh54r9E46t287oIoqJI9P2MPk3LSRZNstFpT0"
        })
      const response = await cohere.generate({
        model: "command",
        prompt: `Explain ${searchTerm}.`,
        maxTokens: 300,
        temperature: 0.9,
      });
      setCoherePrediction(response.generations[0].text);
    } catch (error) {
      console.error("Error fetching prediction from Cohere:", error);
      setCoherePrediction('Error fetching prediction.');
    } finally {
      setIsLoading(false); // Reset loading status regardless of success/failure
      setSearchTerm("");
      setSearchResults([]);
    }
  };
  
  
  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    if (coherePrediction) {
        setCoherePrediction('');
      }
    if (searchTerm.trim()) {
        
      const apiUrl = `https://clinicaltables.nlm.nih.gov/api/disease_names/v3/search?terms=${encodeURIComponent(searchTerm)}`;
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          setSearchResults(data[3],console.log(data));
        })
        .catch(error => {
          console.error("Error fetching data");
          setSearchResults([]);
        });
    } else {
      setSearchResults([]);
    }
  };
  const handleSearch = () => {
    if (!searchTerm.trim()) return;
     fetchCoherePrediction();
  };
  const SignOut = async()=>{
    await signOut(auth);
  };

  return (
    <>
      <HomePageContainer>
        <>User logged In: </>
        {user?.email}
        <Logout onClick={SignOut}> LogOut </Logout>
        <ButtonContainer>
          <ContentInput
            placeholder="Enter your disease name"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <ContentButton onClick={handleSearch}>Search</ContentButton>
        </ButtonContainer>
        <CenteredContainer>
        {isLoading && <p>Loading...</p>}
      {coherePrediction && <p><GeneratedText>{coherePrediction}</GeneratedText></p>}
      </CenteredContainer>
          <ResultsContainer>
            {searchResults.map((item, index) => (
              <ResultItem key={index}>{item[0]}</ResultItem>
              
            ))}
          </ResultsContainer>
      </HomePageContainer>
    </>
  );
  
};


const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
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
  width: 30%;
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
const Logout = styled.button`

`

const ContentInput = styled.input`
  width: 100%;
  height: 50px;
  background-color: #d9ebf4;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  padding-left: 15px;

  &:focus {
    outline: none;
  }
`;
const GeneratedText = styled.div`
  width:70%;
  gap:20px;
  font-family: "Times New Roman", Times, serif;
  font-size:25px;
  `
const CenteredContainer =styled.div`
    display: flex;
  justify-content: center;
  margin-left:370px;
`
export default SearchPage;
