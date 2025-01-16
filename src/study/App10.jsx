import React, { useEffect, useState } from 'react';

function App10(props) {

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    const unMount = () => {

        console.log("장착해제됨");
        
    }

    const mount = () => {   // 최초 실행될 때 

        console.log("장착됨2");
        return unMount;
    }


    useEffect(mount);

    useEffect(() => {   // num2는 100 증가했지만 배열에 값이 num1 이기에 0 출력

        setNum2(num1 + 100);
    }, [num1]);

    
    useEffect(() => {   // 두개의 값중 하나라도 바뀔 시 출력 0, 100
        console.log(num1);
        console.log(num2);
        
    }, [num1, num2]);

    const handleOnClick = () => {

        setNum1(num1 + 10);
    }
    
    return (
        <div>
            <h1>Num1: {num1}</h1>
            <h1>Num2: {num2}</h1>

            <button onClick={handleOnClick}>버튼</button>
        </div>
    );
}

export default App10;