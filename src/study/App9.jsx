/*
        useRef()
*/

import React, { useRef, useState } from 'react';

function App9(props) {

    const aRef = useRef();
    const bRef = useRef();
    const cRef = useRef();
    const dRef = useRef();

    const [inputRefs, setInputRefs] = useState([ aRef, bRef, cRef, dRef ]);

    const handleOnKeyDown = (e) => {

        if (e.keyCode !== 13) { // 엔터키가 눌렀을때만 동작
            
            return;
        }


        let currentIndex = 0;   // 현재 포커스가 있는 입력 필드의 인덱스를 저장할 변수
        let nextIndex = 0;  // 다음에 포커스를 이동할 입력 필드의 인덱스를 저장할 변수

        // inputRefs 배열을 순회하면서 현재 포커스를 가진 input의 인덱스를 찾는다
        for(let i = 0; i < inputRefs.length; i++) {

            // 만약 현재 포커스가 e.target에 해당하는 input이라면
            if (inputRefs[i].current === e.target) {

                currentIndex = i;   // 그 인덱스를 currentIndex에 저장
                break;
            }
        }

        // 만약 현재 인덱스가 마지막 요소라면 첫 번째 요소로 돌아감
        nextIndex = currentIndex + 1 === inputRefs.length ? 0 : currentIndex + 1;

        // 계산된 nextIndex에 해당하는 input 요소로 포커스를 이동시킴
        inputRefs[nextIndex].current.focus();
        
    }

    return (
        <div>
            <input type="text" onKeyDown={handleOnKeyDown} ref={aRef} />
            <input type="text" onKeyDown={handleOnKeyDown} ref={bRef} />
            <input type="text" onKeyDown={handleOnKeyDown} ref={cRef} />
            <input type="text" onKeyDown={handleOnKeyDown} ref={dRef} />
        </div>
    );
}

export default App9;