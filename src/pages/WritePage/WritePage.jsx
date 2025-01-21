/**@jsxImportSource @emotion/react */
import axios from 'axios';
import * as s from './style';
import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';

function WritePage(props) {

    const toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        ['link', 'image', 'video', 'formula'],
        
        [{ 'header': 1 }, { 'header': 2 }],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],
        [{ 'indent': '-1'}, { 'indent': '+1' }], 
        [{ 'direction': 'rtl' }],
        
        [{ 'size': ['small', false, 'large', 'huge'] }],
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        
        [{ 'color': [] }, { 'background': [] }], 
        [{ 'font': [] }],
        [{ 'align': [] }],
        
        ['clean'] 
    ];

    useEffect(() => {
        const head = document.querySelector("head");    // querySelector 로 head, link 를 받는다
        const link = document.createElement("link");

        link.rel = "stylesheet";
        link.href = "https://unpkg.com/react-quill@1.3.3/dist/quill.snow.css";
        head.appendChild(link);
    }, []);

    return (
        <div>
            <div css={s.headerlayout}>
                <button>작성하기</button>
            </div>
            <div css={s.titleLayout}>
                <input type="text"  placeholder='여기에 제목을 입력하세요.'/>

            </div>
            <ReactQuill 

                modules={{
                    toolbar: toolbarOptions,
                }}
                style={{
                    boxSizing: 'border-box',
                    width: "100%",
                    height: "600px",

                }}
            />
        </div>
    );
}

export default WritePage;