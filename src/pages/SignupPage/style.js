import { css } from "@emotion/react";

export const layout = css`

    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    padding: 40px 20px;
    width: 100%;
`;

export const main = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    border: 1px solid #dbdbdb;
    padding: 40px;
    width: 400px;

    & > input {

        box-sizing: border-box;
        margin-bottom: 10px;
        outline: none;
        border: 1px solid #dbdbdb;
        padding: 10px 20px;
    }

    & > button {
        box-sizing: border-box;
        margin-top: 20px;
        outline: none;
        border: 1px solid #dbdbdb;
        padding: 10px 20px;
        font-size: 600;
        background-color: #444444;
        cursor: pointer;
    }

    &:hover {

    background-color: #fafafa;
    }

    &:active {

    background-color: #eeeeee;
    }
`;

export const footer = css`

    box-sizing: border-box;
    display: flex;
    justify-content: center;
    border: 1px solid #dbdbdb;
    padding: 40px;
    width: 400px;  
    
    & > span {

        margin-right: 10px;
        cursor: default;
    }

    & > a {

        text-decoration: none;
        color: #d5ae00;
        font-weight: 600;
    }
`;