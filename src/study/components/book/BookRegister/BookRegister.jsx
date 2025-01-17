import React, { useState } from 'react';
import "./style.css";

function BookRegister({ bookList, setBookList }) {  // registerInputValue에 입력된 데이터를 bookList 배열에 추가한다

    const [ registerInputValue, setRegisterInputValue ] = useState({    // 사용자의 입력값을 저장할 초기 상태 객체 생성
            bookName: "",
            author: "",
            publisher: "",
        });
    
        const handleRegisterInputOnChange = (e) => {    // 사용자가 입력한 데이터를 상태에 저장한다
            setRegisterInputValue({
                ...registerInputValue,
                [e.target.name]: e.target.value,
            });
        }
    
        const handleRegisterButtonOnClick = () => { // 등록 버튼 클릭 시, 입력된 데이터를 bookList 상태에 추가한다
            setBookList([
                ...bookList,
                registerInputValue,
            ]);
    
            alert("등록 완료.");
    
            setRegisterInputValue({ // 등록 완료 후 입력값을 초기화한다
                bookName: "",
                author: "",
                publisher: "",
            });
        }

    return (
        <div>
            <h1>도서정보 등록</h1>
            <div className='register-input'>
                <input type="text" placeholder='도서명' name='bookName' value={registerInputValue.bookName} onChange={handleRegisterInputOnChange} />
                <input type="text" placeholder='저자명' name='author' value={registerInputValue.author} onChange={handleRegisterInputOnChange} />
                <input type="text" placeholder='출판사' name='publisher' value={registerInputValue.publisher} onChange={handleRegisterInputOnChange} />
                <button onClick={handleRegisterButtonOnClick}>등록</button>
            </div>
        </div>
    );
}

export default BookRegister;