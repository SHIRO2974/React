function TextInput({id, text}) {
    
//  구조 분해 할당  
    const user = {
        username: "test",
        password: "1234",
        name: "이재현",
    };

    const {username, name} = user;
    console.log(username);
    

//   TextInput 파라미터를 구조분해하여 매번 props를 참조하지 않고 필요 속성만 사용할 수 있다
    return <div>
        <label htmlFor={id}>{text}</label>  
        <input type="text" id={id} />
    </div>
}

export default TextInput;