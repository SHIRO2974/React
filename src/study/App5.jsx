
import React, { useState } from 'react';

function App5(props) {

//  회원가입을 한 데이터를 배열안에 넣는다
    const [userList, setUserList] = useState([]);

//  입력한 데이터값을 inputValue에 저장
    const [inputValue, setInputValue] = useState({
        username: "",
        password: "",
        name: "",
        email: ""
    })

//  로그인 정보를 입력한 값
    const [loginValue, setLoginValue] = useState({

        username:"",
        password:"",
    });

//  회원가입 입력한 데이터 값을 변경
    const handleInputOnChange = (e) => {

        const {name, value} = e.target;

        setInputValue({
            ...inputValue,
            [name]: value,
        });
        
    };

//  로그인 입력한 데이터 값을 변경
    const handleLoginInputOnChange = (e) => {

        const {name, value} = e.target;

        setLoginValue({
            ...loginValue,
            [name]: value,
        });

    };

//  회원가입 버튼을 눌렀을때
    const handleOklOnclick = () => {

//      만든 User을 List에 추가한다
        setUserList([
            ...userList, inputValue
        ]);

        alert("가입완료")

//      회원가입 후 입력값 초기화
        setInputValue({
            username: "",
            password: "",
            name: "",
            email: ""
        });

    };

//  로그인 버튼을 눌렀을때
    const handleLoginOnClick = () => {

//      로그인 값 user 와 userList 에서 일치하는 사용자 찾기
        const finduser = userList.find(

            finduser => finduser.username === loginValue.username
        );

        if (!finduser) {

            alert("사용자 정보를 다시 확인하세요.")
            return;
        }

        if (finduser.password !== loginValue.password) {

            alert("사용자 정보를 다시 확인하세요.")
            return;
        }
        
        alert(`${finduser.name} (${finduser.email})님 환영합니다`)
    };

    return (
        <div>
            <h1>회원가입</h1>
            <input type="text" name='username' onChange={handleInputOnChange} placeholder='username' value={inputValue.username} />
            <input type="password" name='password' onChange={handleInputOnChange} placeholder='password' value={inputValue.password} />
            <input type="text" name='name' onChange={handleInputOnChange} placeholder='name' value={inputValue.name} />
            <input type="text" name='email' onChange={handleInputOnChange} placeholder='email' value={inputValue.email} />

            <div>
            <button onClick={handleOklOnclick}>가입하기</button>
            </div>
            <h1>로그인</h1>
            <input type="text" name='username' onChange={handleLoginInputOnChange} placeholder='username' value={loginValue.username} />
            <input type="password" name='password' onChange={handleLoginInputOnChange} placeholder='password' value={loginValue.password} />
            <div>
                <button onClick={handleLoginOnClick}>로그인</button>
            </div>

        </div>
    );
}

export default App5;