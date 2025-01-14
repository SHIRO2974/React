import React from "react";

function Hello() {
//  함수형 컴포넌트
//  컴포넌트는 함수명이 모두 대문자로 시작!
//  모든 태그는 열리면 닫혀야한다 
//  두개 이상의 리턴값은 태그로 감싸주어야 한다
//  <></>: 빈 태그는 React.Fragment가 축약되어 있다
    return <>
        <h1>Hello react!</h1>
        <input type="text" />
    </>
}

export default Hello;