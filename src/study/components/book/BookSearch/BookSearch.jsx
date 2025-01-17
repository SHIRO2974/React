import React, { useState } from 'react';
import "./style.css";
import BookSearchItems from '../BookSearchItems/BookSearchItems';

function BookSearch({ bookList }) { // bookList를 참조해 찾고자하는 데이터를 
    const [ bookTableList, setBookTableList ] = useState([]);

    return (
        <div>
            <h1>도서정보 조회</h1>
            <BookSearchItems bookList={bookList} setBookTableList={setBookTableList} />
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
    );
}

export default BookSearch;