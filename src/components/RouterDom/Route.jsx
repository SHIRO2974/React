import React, { useEffect } from 'react';

function Route({ path, element }) {

    

    return (
        <>
            {
                // pathname과 path 가 동일해야만 element 실행
                window.location.pathname === path && element    
            }
        </>
    );
}

export default Route;