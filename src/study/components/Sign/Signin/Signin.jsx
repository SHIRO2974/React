import React, { useState} from 'react';

function Signin({userList}) {

    //  로그인 정보를 입력한 값
    const [loginValue, setLoginValue] = useState({

        username:"",
        password:"",
    });

    //  로그인 입력한 데이터 값을 변경
    const handleLoginInputOnChange = (e) => {

        const {name, value} = e.target;

        setLoginValue({
            ...loginValue,
            [name]: value,
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
            <h1>로그인</h1>
            <input type="text" name='username' onChange={handleLoginInputOnChange} placeholder='username' value={loginValue.username} />
            <input type="password" name='password' onChange={handleLoginInputOnChange} placeholder='password' value={loginValue.password} />
            <div>
                <button onClick={handleLoginOnClick}>로그인</button>
            </div>
        </div>
    );
}

export default Signin;