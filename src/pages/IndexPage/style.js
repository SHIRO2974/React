import { css } from "@emotion/react"

//  ``로 사용함으로써 문자열을 css로 반환
export const mainLayout = (backgroundColor) => css `    // mainLayout을 함수로 만들어 backgroundColor를 파라미터로 받는다
    margin: 0 auto;
    width: 1100px;
    height: 100%;
    background-color: ${backgroundColor};   // 파라미터로 전달받은 backgroundColor 값을 CSS에 적용
`;