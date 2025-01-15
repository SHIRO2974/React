import { useState } from "react";

/*
    useState 상태관리
*/


function App2() {

//  useState 초기값 설정
    const [num, setNum] = useState(0);

//  렌더링을 하지 않을 시 일반변수를 사용해야한다
    let number = 0;

    console.log(num);
    console.log(number);
    
//  useState 상태 값 변경
    const handleIncreseOnClick = () => {

        if (num < 9) {
            
            setNum(num + 1);
        }
        return;
    }

    const handleDecreaseOnClick2 = () => {

       if (num > -9) {

        setNum(num - 1);
        
       }
       return;
    }

    return <>
        <h1>{num}</h1>
        <button onClick={handleIncreseOnClick}>1증가</button>
        <button onClick={handleDecreaseOnClick2}>1감소</button>
    </>
}

export default App2;