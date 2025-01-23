import { Route, Routes, useLocation } from 'react-router-dom';
import IndexPage from './pages/IndexPage/IndexPage';
import { Global } from '@emotion/react';
import { global } from './styles/global';
import WritePage from './pages/WritePage/WritePage';
import MainLayout from './components/MainLayout/MainLayout';
import ListPage from './pages/ListPage/ListPage';
import SignupPage from './pages/SignupPage/SignupPage';
import SigninPage from './pages/SigninPage/SigninPage';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

function App() {

  const location = useLocation();

  const authenticatedUser = async () => {
    
    return await axios.get("http://localhost:8080/servlet_study_war/api/authenticated", {

      headers: {

        "Authorization": `Bearer ${localStorage.getItem("AccessToken")}` ,  // 키: Authorization 값: accessToken
      }
    });
  }

  const authenticatedUserQuery = useQuery(  // useQuery 는 호출된 순간 useEffect 처럼 사용된다

    ["authenticatedUserQuery"], 
    authenticatedUser, 
    {

      // enabled 가 true 가 되야 요청을 보낸다 AccessToken 없다면 실행 X
      refetchOnWindowFocus: false,
      enabled: !!localStorage.getItem("AccessToken"), 
    }
  );  

  console.log(authenticatedUserQuery.isLoading);

  return (
    
    <>

    <Global styles = {global}/>
    
    {
      authenticatedUserQuery.isLoading  // 로그인 데이터 존재여부 확인
      ? 
      <></> //true
      :
        // false
      <MainLayout>
        <Routes>
            <Route path= "/" element= { <IndexPage /> } />
            <Route path= "/write" element= { <WritePage /> }/>
            <Route path='/list' element={ <ListPage /> } />
            <Route path='/signup' element={ <SignupPage /> } />
            <Route path='/signin' element={ <SigninPage /> } />
        </Routes>
      </MainLayout>
     }
    </>
  );
}

export default App;
