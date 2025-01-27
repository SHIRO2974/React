/**@jsxImportSource @emotion/react */
import { Link, useNavigate } from 'react-router-dom';
import * as s from './style';
import React, { useEffect, useState } from 'react';
import { LuUserRoundPlus, LuLogIn, LuLogOut, LuUser, LuLayoutList, LuNotebookPen } from "react-icons/lu";
import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { accessTokenAtomState } from '../../atom/authUserIdAtomState';


function MainHeader(props) {

    const navigate = useNavigate
    const queryClient = useQueryClient(); // 전역 상태를 관리할 수 있다
    const userId = queryClient.getQueryData(["authenticatedUserQuery"])?.data.body; // authenticatedUserQuery 쿼리 키 데이터를 가져온다 data.body: access respons
    const [ accessToken, setAccessToken ] = useRecoilState(accessTokenAtomState);
    console.log(userId);
    
    
    const setAcessToken = useSetRecoilState(accessTokenAtomState);
    
        const getUserApi = async () => {

                return await axios.get("http://localhost:8080/servlet_study_war/api/user", {
                    headers: {
                        "Authorization": "Bearer " + localStorage.getItem("AccessToken"),
                    },
                    params: {
                        "userId": userId,
                    }
                });
        }

        const getUserQuery = useQuery(  

            ["getUserQuery"],   // userId 로그인 키값 확인
            getUserApi,

            {
                retry: 0,
                refetchOnWindowFocus: false,
                enabled: !!userId,   // userId가 있을 때만 쿼리를 실행하도록 설정
            }
        );

        const handleLogoutOnClick = () => {

            localStorage.removeItem("AccessToken")
            setAcessToken(localStorage.setItem("AccessToken"));
            navigate("/signin");
        }

    return (
        //  a태그는 강제적으로 페이지를 이동하기 때문에 Link태그를 사용한다
        // Link태그는 해당부분만 이동한다

        <div css = {s.layout}>
            <div css = {s.leftContainer}>
                <Link to={"/"}><h1>미니 게시판 프로젝트</h1></Link>  
                <ul>
                    <Link to={"/list"}> 
                        <li>
                            <LuLayoutList /> 게시글 목록
                        </li>
                    </Link>

                    <Link to={"/write"}>
                        <li>
                            <LuNotebookPen /> 게시글 작성    
                        </li>
                    </Link>
                </ul>
            </div>

            <div css = {s.rightContainer}>
            {
                    !!userId ?
                    <ul>
                    <Link to={"/mypage"}>
                        <li><LuUser /> {getUserQuery.isLoading ? "" : getUserQuery.data.data.body.username}</li>
                    </Link>
                    <a href='javascript: void(0)' onClick={handleLogoutOnClick}>
                        <li>
                            <LuLogOut />로그아웃
                        </li>
                    </a>
                </ul>
                :
                <ul>
                    <Link to={"/signin"}>
                        <li><LuLogIn />로그인</li>
                    </Link>
                    <Link to={"/signup"}>
                        <li><LuUserRoundPlus />회원가입</li>
                    </Link>
                </ul>
                }
            </div>
        </div>
    );
}

export default MainHeader;