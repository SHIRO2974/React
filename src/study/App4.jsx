import React, { useState } from 'react';

function App4(props) {

    const [ userInfo, setUserInfo] = useState({ // 사용자에게 입력받을 이름과 성별을 저장할 객체

        name: "",
        gender: "",
    });

    const [ inputValue, setinputValue ] = useState({

        name: "",
        gender: "male",
    })

    const handleinputOnChange = (e) => {
        
        const { name, value } = e.target;

        setinputValue({

            ...inputValue,
            [name]: value,
       })
    
    }

    const handleOklOnclick = () => {

        setUserInfo({

            name: inputValue.name,
            gender: inputValue.gender === "male" ? "남" : "여",
        });

        setinputValue({

            ...inputValue,
            name: "",
        });
    }

    return (
//      input의 value값은 입력값이 게속 바뀔 수 있기 때문에 value={nameInputText} 동일세팅을 해주어야 한다
        <div>
            <h1>이름: {userInfo.name}({userInfo.gender})</h1>
            <input type="text" name='name' onChange={handleinputOnChange} value={inputValue.name} /> 
            <input type="radio" id='male' name="gender" onChange={handleinputOnChange} checked={inputValue.gender === "male"} value={"male"}/>
            <label htmlFor="male">남</label>
            <input type="radio" id='female' name="gender" onChange={handleinputOnChange} checked={inputValue.gender === "female"} value={"female"}/>
            <label htmlFor="female">여</label>
            <button onClick={handleOklOnclick}>확인</button>
        </div>
    );
}

export default App4;
