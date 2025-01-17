/*
        Promise -> asyns / await
*/

import React, { useState } from 'react';

function App12(props) {

    const findUserByUsername = (username) => {  // 사용자가 검색한 username 을 기준으로 데이터를 찾는다

        const userList = [  // 사용자 데이터
            {username: "aaa", password: "1111"},
            {username: "bbb", password: "2222"},
            {username: "ccc", password: "3333"},
        ];
        return userList.find(user => user.username === username);   // userList에 담긴 username와 사용자가 검색한 정보와 일치하는 결과값을 반환
    }

    const getuserApi = (url, params) => {   // 서버에 요청할 url, params 을 받는다

        return new Promise((resolve, reject) => {

            console.log(`"서버에 ${url}?${params}요청"`);
            const foundUser = findUserByUsername(params.username);  // 사용자의 입력값을 받아 비교한다

            if (!!foundUser) {  // 사용자의 입력값과 userList안에 username 이 같다면          
                
                resolve(foundUser); // userList 안에 username 을 반환

            } else {

                reject(new Error("해당 사용자 정보를 찾을 수 없습니다"))
            }
        });
    }

    const [ usernameInput, setUsernameInput] = useState("");    // 사용자의 Input 데이터를 저장할 객체

    const handleUsernameInputOnchange = (e) => {    // 입력값을 받아 상태에 저장한다

        setUsernameInput(e.target.value);
    }

    const handleSearchOnClick = () => { // 클릭 이벤트가 발생할 시

        getuserApi("http://localhost:8080/user", {username: usernameInput}) // getuserApi 함수를 호출하여 

        .then((Response) => {   // 입력값과 데이터값이 일치한다면

            console.log(Response);  // 데이터값 반환
            
        }).catch((errer) => {

            console.error(errer); 
        });
    }

    return (
        <div>
            <input type="text" placeholder='username' onChange={handleUsernameInputOnchange} value={usernameInput} />
            <button onClick={handleSearchOnClick}>찾기</button>
        </div>
    );
}

export default App12;