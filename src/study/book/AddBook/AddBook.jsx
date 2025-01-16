import React, { useState } from 'react';

function AddBook({bookList, setBookList}) {

    const [addBook, setAddBook] = useState({
        title: "",
        author: "",
        publisher: "",
    })

    const handleAddBookOnChange = (e) => {

        const {name, value} = e.target;

        setAddBook({
            
            ...addBook,
            [name]: value,
        })
    }

    const handleAddOnClick = () => {

        setBookList([
            ...bookList,
            addBook
        ]);
        alert("등록완료!")

        setAddBook({

            title: "",
            author: "",
            publisher: "",
        });
    };

    return (
        <div>
            <h1>도서정보 등록</h1>
                <input type="text" name='title' onChange={handleAddBookOnChange} placeholder='도서명을 입력하세요' value={addBook.title}/>
                <input type="text" name='author' onChange={handleAddBookOnChange} placeholder='저자명을 입력하세요' value={addBook.author}/>
                <input type="text" name='publisher' onChange={handleAddBookOnChange} placeholder='출판사명을 입력하세요' value={addBook.publisher}/>

                <div>

                <button onClick={handleAddOnClick}>등록</button>
                </div>
        </div>
        
    );
}

export default AddBook;