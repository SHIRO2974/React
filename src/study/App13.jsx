import React, { useState } from 'react';

function App13(props) {

    const getUser = (username) => {

        const userList = [
            {

                username: "aaa",
                name: "이재현",
            },
            {

                username: "bbb",
                name: "아무개",
            },
            {

                username: "ccc",
                name: "아무배",
            },
        ]

        return new Promise((resolve, reject) => {

            const foundUser = userList.find(user => user.username === username);

            if (!!foundUser) {

                resolve(foundUser);
                
            } else {

                reject(new Error("사용자를 찾지 못함"));
            }
        });
    }

    const generateToken = (user) => {

        return new Promise((resolve, reject) => {

            if (!!user) {
                
                resolve("새로만든 토큰");

            } else {

                reject(new Error("토큰 생성 실패"));
            }
        });
    }

    const generateToken2 = async (user) => {

        if (!user) {
            
            throw new Error("토큰 생성실패");

        } 
          return "새로만든 토큰"  
    }

    const [ username, setUsername] = useState("");

    const handleUsernameOnChange = (e) => {

        setUsername(e.target.value);
    }

    const handleButtonOnClick = () => {

        let user = null;

        getUser(username)
        .then(result => {

            user = result;
            generateToken(user)
            .then(token => console.log(token))
        })

        .catch(error => console.error(error));
    }

    // async function handleButtonOnClick2 () {

    //     const result = await getUser(username);
    //     const token = await handleButtonOnClick2(result);
    // }
/*
        asyns 키워드를 함수에 사용하면
        리턴자료형이 Promise객체가 된다

        async와 await 키워드 사용 조건
        1. await은 asyns 함수 안에서만 사용가능
        2. await promise를 return하는 함수에만 사용가능
            === Promise 객체 앞에 사용할 수 있다
*/
    const handleButtonOnClick2 = async () => {

        try {
            
            const result = await getUser(username); 
            console.log(result);
    
            const token = await generateToken2(result);
            console.log(token);

        } catch (error) {
            
            console.error(error);
        }
    }

    return (
        <div>
            <input type="text" onChange={handleUsernameOnChange} value={username}/>
            <button onClick={handleButtonOnClick}>토큰 생성</button>
            <button onClick={handleButtonOnClick2}>토큰 생성2</button>
        </div>
    );
}

export default App13;