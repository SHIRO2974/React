import React, { useState } from 'react';

function FindBook(props) {
    return (


        <div>
            <h1>도서정보 조회</h1>
            <select name="" id="">
                <option value="title" >도서명</option>
                <option value="author">저자명</option>
                <option value="publisher">출판사</option>
            </select>
            <input type="text" />
            <button>검색</button>
        </div>
    );
}

export default FindBook;