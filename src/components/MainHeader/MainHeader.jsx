/**@jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import * as s from './style';
import React, { useEffect, useState } from 'react';
import { LuUserPlus, LuLogIn, LuLogOut, LuUser, LuLayoutList, LuNotebookPen } from "react-icons/lu";
import axios from 'axios';


function MainHeader(props) {

    const [ userId, setUserId ] = useRecoilState(authUserIdState);
    

    useEffect(() => {

        const getUserAPI = async (userId) => {

            try {
                const response = await axios.get("http://localhost:8080/servlet_study_war/api/user", {
                    headers: {
                        "Authorization": "Bearer " + localStorage.getItem("AccessToken"),
                    },
                    params: {
                        "userId": userId,
                    }
                });
                console.log(response);
            } catch (error) {
                
            }
        }

    }, [userId]);   // 로그인 또는 로그아웃 상태

    useEffect(() => {   

        if (!!userId) { // user가 0이 아닐때만
            
            getUserAPI(userId);
        }
    },[userId]) 

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
                        <li>
                            <LuUser />사용자이름
                        </li>
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
                            <LuUserRoundPlus />회원가입
                        </li>
                    </Link>
                </ul>
                }
            </div>
        </div>
    );
}

export default MainHeader;