/**
 * 도서정보 등록 및 조회
 * 
 * 도서명, 저자명, 출판사명 입력
 * bookList에 저장
 * 
 * table
 * tbody
 * tr
 * td
 * 
 * 
 */

import React, { useState } from 'react';
import AddBook from './book/AddBook/AddBook';
import FindBook from './book/FindBook/FindBook';
import "./styles/app7.css";

function App7(props) {

    const [ bookList, setBookList] = useState([]);  // bookList 배열에 도서목록을 저장한다

    const [ registerInputValue, setRegisterInputValue] = useState({ // 사용자의 데이터를 받아 registerInputValue 에 담는다

        bookName: "",
        author: "",
        publisher: "",
    });

    const handleRegisterInputOnChange = (e) => {    // handleRegisterInputOnChange 이벤트가 발생하면

        setRegisterInputValue({ 

            ...registerInputValue,  // 입력값은 유지하고
            [e.target.name]: e.target.value,    // 변경된 값을 갱신
        });
    }

    const handleRegisterButtonOnClick = () => { // 클릭이벤트가 발생하면

        setBookList([   // 기존의 bookList와 입력받은 registerInputValue 를 등록한다

            ...bookList,
            registerInputValue,
        ]);
        alert("등록 완료.");

        setRegisterInputValue({ // 초기화
            bookName: "",
            author: "",
            publisher: "",
        })
    }

    const [ bookTableList , setBookTableList] = useState([]);   // bookTableList 배열에 도서 조회 결과 저장

    const [ searchValue, setSearchValue] = useState({   // 사용자가 검색한 데이터값을 searchValue 로 받는다

        select: "bookName",
        text: "",
    });

    const searchOptions = [ // 어떤 값으로 검색을 받을지 검색옵션을 선택

        {
            id: 1,
            lable: "도서명",
            value: "bookName",
        },
        {
            id: 2,
            lable: "저자명",
            value: "author",
        },
        {
            id: 3,
            lable: "출판사",
            value: "publisher",
        },
    ];

    const handleSearchValueOnChange = (e) => {  // handleSearchValueOnChange 이벤트가 발생하면

        setSearchValue({    // 선택된 검색옵션 값을 변경

            ...searchValue,
            [e.target.name]: e.target.value,
        });
    }

    const handleSearchOnClick = () => { // 클릭 이벤트가 발생하면

        if(!searchValue.text.trim()) {  // 검색어가 비어있다면 

            setBookTableList(bookList); // 모든 bookList를 보여준다
            return;
        }

 
            // 선택한 옵션(도서명, 저자명, 출판사)으로 검색어를 포함하는 도서를 필터링
            const foundBooks = bookList.filter(book => book[searchValue.select].includes(searchValue.text)) 
            setBookTableList(foundBooks);   // 도서를 조회한다
        }
    

    return (
        <div className='container'>
            <div>
                <h1>도서정보 등록</h1>
            
                <div className='register-input'>
                    <input type="text" placeholder='도서명' name='bookName' value={registerInputValue.bookName} onChange={handleRegisterInputOnChange}/>
                    <input type="text" placeholder='저자명' name='author' value={registerInputValue.author} onChange={handleRegisterInputOnChange}/>
                    <input type="text" placeholder='출판사' name='publisher' value={registerInputValue.publisher} onChange={handleRegisterInputOnChange}/>
                    <button onClick={handleRegisterButtonOnClick}>등록</button>
                </div>
            </div>
            <div>
            <h1>도서정보 조회</h1>
            <div className='search-items'>
                <select name="select" onChange={handleSearchValueOnChange} value={searchValue.select}>
                    {
                        searchOptions.map(option => <option key={option.id} value={option.value}>{option.lable}</option>)
                    }
                </select>
                <input type="text" name='text' onChange={handleSearchValueOnChange} value={searchValue.text} />
                <button onClick={handleSearchOnClick}>검색</button>
            </div>
                <table className='book-table'>
                    <thead>
                    <tr>
                        <th>도서명</th>
                        <th>저자명</th>
                        <th>출판사</th>
                    </tr>
                    </thead>

                    <tbody>
                        {
                            bookTableList.map(book =>
                                <tr>
                                    <td>{book.bookName}</td>
                                    <td>{book.author}</td>
                                    <td>{book.publisher}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                
            </div>
        </div>
    );
}

export default App7;