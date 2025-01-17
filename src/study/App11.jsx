import React from 'react';

/*
        비동기
        promise(resolve, reject)
        then, catch, finally

        asyns / await
        try, catch, finally
*/

//  coll back 함수: 다른 함수에 인자로 전달되어 그 함수 내부에서 호출되는 함수를 의미
//  즉 콜백 함수는 나중에 호출될 함수
function App11(props) {

    setTimeout(() => {  // 3초뒤에 1, 2 를 출력

        console.log("1");
        console.log("2");

        setTimeout(() => {  // 1, 2가 출력된 후 2초뒤 3 출력

            console.log("3");
        }, 2000);

    }, 3000);

//  Promise: 비동기 작업처리 결과값을 처리할 때 사용되는 객체이고 완료 또는 거부 방법을 제공
//  resolve: 결정하다
//  reject: 거부하다
    const isSuccess = false;
    const isSuccess2 = true;

    const p1 = new Promise((resolve, reject) => {   // Promise가 생성되어지면 coll back 함수 호출

        console.log("Promise1 생성!");
    
        if (isSuccess) {
            
            resolve();

        } else {

            reject();
        }
    });

    p1.then(() => {     // resolve가 호출되면 then 호출 

        console.log("p1 then 호출");

    }).then(() => {     // return값이 promise이기 때문에 다시 then 호출이 가능하다

        console.log("p1 2번째 then 호출");

    }).catch(() => {    // then의 호출 결과 이후에 실행된다

        console.log("p1 catch 호출");
    })

    const p2 = new Promise((resolve, reject) => {

        console.log("Promise2 생성!");
        

        if (isSuccess2) {
            
            resolve();

        } else {

            reject();
        }
    });
    
    p2.then(() => {

        console.log("p2 then 호출");
        
    }).then(() => {

        console.log("p2 2번째 then 호출");
        
    }).catch(() => {    // then의 호출 결과 이후에 실행된다

        console.log("p2 catch 호출");
    });

    const p3 = new Promise((resolve, reject) => {

        console.log("Promise3 생성!");
        
        const response = {

            status: 200,    // http 200코드
            data: {

                username: "aaa",
                password: "1234",
            }
        };

        if (true) {
            
            resolve(response);

        } else {

            reject();
        }
    });

    p3.then((r) => {

        console.log(r);

        if (true) {
            
            throw new Error ("오류!!!");
        }

        return {

            response: {

                ...r.response,  // r 안에 있는 response

                data: {

                    ...r.response.data, // r 안에 response 안에 data
                    name: "이재현",
                    email: "aaa@gmail.com", 
                }
            }
        }

    }).then((r) => {

        console.log(r);
        
    }).catch((error) => {

        console.error(error);
    })

    const p4 = new Promise((resolve, reject) => {

        console.log("Promise4 생성!");
        
        const response = {

            status: 400,    // http 400코드
            data: {

                errorMessage: "문자열 형식이 맞지 않습니다"
            }
        };

        if (false) {
            
            resolve(response);

        } else {

            reject(new Error(JSON.stringify({response})));
        }
    });

    p4.then((error) => {

        console.error(error);
    });

    return (
        <div>
            
        </div>
    );
}

export default App11;