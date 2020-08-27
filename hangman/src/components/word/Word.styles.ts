import styled from "styled-components";

export const WordContainer = styled.div`
    display: flex;
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
`;

export const LetterContainer = styled.span`
    border-bottom: 3px solid #2980b9;
    display: inline-flex;
    font-size: 30px;
    align-items: center;
    justify-content: center;
    margin: 0 3px;
    height: 50px;
    width: 20px;
`;