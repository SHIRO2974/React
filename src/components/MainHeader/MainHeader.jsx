/**@jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import * as s from './style';
import React, { useEffect, useState } from 'react';
import { LuUserRoundPlus, LuLogIn, LuLogOut, LuUser, LuLayoutList, LuNotebookPen } from "react-icons/lu";
import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';


function MainHeader(props) {

    const queryClient = useQueryClient();
    const userId = queryClient.getQueryData(["authenticatedUserQuery"])?.data.body; // authenticatedUserQuery 쿼리 키 데이터를 가져온다
    
        const getUserAPI = async (userId) => {

            
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

            ["getUserQuery", userId],   // userId 로그인 키값 확인
            getUserAPI,
            {

                refetchOnWindowFocus: false,
                enabled: !!userId,   // userId가 있을 때만 쿼리를 실행하도록 설정
            }
        );

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
                        <li><LuUser /> {getUserQuery.isLoading ? "" : getUserQuery.data.data.username}</li>
                    </Link>
                    <Link to={"/logout"}>
                        <li>
                            <LuLogOut />로그아웃
                        </li>
                    </Link>
                </ul>
                :
                <ul>
                    <Link to={"/signin"}>
                        <li>
                            <LuLogIn />로그인
                        </li>
                    </Link>
                    <Link to={"/signup"}>
                        <li>
                            <LuUserRoundPlus  />회원가입
                        </li>
                    </Link>
                </ul>
                }
            </div>
        </div>
    );
}

export default MainHeader;