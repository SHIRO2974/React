import React, { useState} from 'react';

function Signup({userList, setUserList}) {

    const [inputValue, setInputValue] = useState({
            username: "",
            password: "",
            name: "",
            email: ""
        })

    const handleInputOnChange = (e) => {

        const {name, value} = e.target;

        setInputValue({
            ...inputValue,
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
        </div>
    );
}

export default Signup;