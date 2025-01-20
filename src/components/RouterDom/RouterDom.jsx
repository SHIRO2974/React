import React, { useEffect, useState } from 'react';
import Route from './Route';

function RouterDom({ children }) {

    const [ pathname, setPathname] = useState(window.location.pathname);

    console.log(pathname);
    

    useEffect(() => {   // pathname이 변경될 때 마다 화면을 바꾼다

        setPathname(window.location.pathname);
    }, [window.location.pathname])
    
    return (
        <div>
            {children}
        </div>
    );
}

export default RouterDom;