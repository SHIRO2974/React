import "./style.css";


//  일반함수는 export를 function 앞에 사용한다
export function printConsole() {
    console.log("hello2파일 입니다.");
    
}

export function printConsole2() {
    console.log("hello2파일 입니다.");
    
}

function Hello2() {

    const h1Text = 'Hello React!';
    const h1 = <h1>{h1Text}</h1>
    
    return <>
        {h1}
        <label className="box" htmlFor="username">아이디</label>
        <input id="username"/>
    </>
}

// import 를 할려면 export를 무조건 해줘야하며
// 컴포넌트는 default를 사용한다
export default Hello2;
