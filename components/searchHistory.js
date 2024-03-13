import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import { db,auth } from '../library/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';


const SearchHistory = () => {
    const [searchHistory, setSearchHistory] = useState([]);
    useEffect(() => {
        const fetchSearchHistory = async () => {
          if(auth.currentUser){
          const querySnapshot = await getDocs(collection(db, "searchHistory"));
          const historyData = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()

          }));
          setSearchHistory(historyData);
        }
        };
    
      const userStateChange = onAuthStateChanged(auth, (user) => {
        if (user) {
            fetchSearchHistory();
        } else {
            setSearchHistory([]);
        }
            });

            return () => userStateChange();
        }, []);
  return (
    <>
    <HomePageContainer>
        <ContentContainer>
           <Content>Search History</Content>
           <SubContent>
            {searchHistory.length>0?(
           searchHistory.filter(item => item.Email && item.History).map((item) => (
            <SearchHistoryContainer key={item.id}>
              <HistoryTerm>{item.History}</HistoryTerm>
            </SearchHistoryContainer>
          ))
            ):(<p>Please Login to see search history</p>)}
        </SubContent>
    </ContentContainer>
    </HomePageContainer>
    </>
  );    
};

const HomePageContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
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
    gap:20%;

`;


//the text under main text
const SubContent = styled.div`
    width:80%;
    padding-bottom:3vw;
    font-size:20px;
    font-family:"FreeMono",san-serf;
    color: #5A5A5A;
`
const SearchHistoryContainer = styled.button`
    width:80%;
    margin-bottom: 1vw;
    padding: 1vw;
    border:none;
    border-radius: 8px;
    background-color:#79D4FF;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;
const HistoryTerm = styled.a`
    color:white;
    font-size: 24px;
    color: white;
    font-weight:bold;
`;
export default SearchHistory;