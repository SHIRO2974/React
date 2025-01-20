import React, { useState } from 'react';

function App3(props) {

    const [ name, setName] = useState("");
    const [ gender, setGender ] = useState("");
    const [ nameInputValue, setnameInputValue] = useState("");
    const [ genderInputValue, setgenderInputValue] = useState("male");

    
    const handleNameInputOnChange = (e) => {
        
        setnameInputValue(e.target.value);   // input에서 일어난 이벤트 value를 nameInputText 에 받는다
        
    }

    
    const handleGenderOnChange = (e) => {
        
        setgenderInputValue(e.target.value);
        
    }
    
    const handleOKOnclick = () => { // 클릭 이벤트가 발생 시
        setName(nameInputValue);    // nameInputValue에 사용자가 입력한 이름이 들어간다
        setnameInputValue("");      // 그리고 초기화
        setGender(genderInputValue === "male" ? "남" : "여");
    }

    return (
//      input의 value값은 입력값이 게속 바뀔 수 있기 때문에 value={nameInputText} 동일세팅을 해주어야 한다
        <div>
            <h1>이름: {name}({gender})</h1>
            <input type="text" onChange={handleNameInputOnChange} value={nameInputValue} /> 
            <input type="radio" id="male" name="gender" onChange={handleGenderOnChange} checked={genderInputValue === "male"} value={"male"}/>
            <label htmlFor="male">남</label>
            <input type="radio" id="female" name="gender" onChange={handleGenderOnChange} checked={genderInputValue === "female"} value={"female"}/>
            <label htmlFor="female">여</label>
            <button onClick={handleOKOnclick}>확인</button>
        </div>
    );
}

export default App3;
