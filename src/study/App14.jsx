import axios from 'axios';
import React from 'react';

function App14(props) {

    const handleRequestOnClick = async () => {

        let response = null;

        try {
            response = await axios.get("http://localhost:8080/servlet_study_war/api/user")  // 백엔드에 있는 데이터를 불러온다
            console.log(response);
            console.log(response.data.username);    // data 안에 있는 username만 가져옴
            

        } catch (error) {
            
            console.error(error);
        }
    }

    const handleBookRequestOnClick = async () => {

        let response = null;

        try {
            
            response = await axios.get("http://localhost:8080/servlet_study_war/api/book")
            console.log(response);
            
        } catch (error) {
            
            console.error(error);
        }
    }

    return (
        <div>
            <button onClick={handleRequestOnClick}>요청</button>
            <button onClick={handleBookRequestOnClick}>도서요청</button>
        </div>
    );
}

export default App14;   