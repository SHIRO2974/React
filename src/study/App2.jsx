import { useState } from "react";

/*
    useState 상태관리
*/


function App2() {

//  useState 초기값 설정
    const [num, setNum] = useState(0);

    let number = 0;

    console.log(num);
    console.log(number);
    
//  useState 상태 값 변경
    const handleIncreseOnClick = () => {

        setNum(num + 1);
    }

    const handleIncreseOnClick2 = () => {

        setNum(num - 1);
    }

    return <>
        <h1>{num}</h1>
        <button onClick={handleIncreseOnClick}>1증가</button>
        <button onClick={handleIncreseOnClick2}>1감소</button>
    </>
}

export default App2;