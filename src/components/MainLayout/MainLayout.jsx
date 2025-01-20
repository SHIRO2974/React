/**@jsxImportSource @emotion/react */
import MainHeader from '../MainHeader/MainHeader';
import * as s from './style';
import React from 'react';

function MainLayout({ children }) {

    return (
        // MainHeader를 컴포넌트 분리
        <div css = {s.layout}>
            <MainHeader />  
            { children }
        </div>
    );
}

export default MainLayout;