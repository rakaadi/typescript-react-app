import styled from "styled-components";

export const PopupContainer = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: none;
    align-items: center;
    justify-content: center;
`;

export const PopupContent = styled.div`
    background: #2980b9;
    border-radius: 5px;
    box-shadow: 0 15px 10px 3px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
`;

export const ButtonPopup = styled.button`
    cursor: pointer;
    background-color: #fff;
    color: #2980b9;
    border: 0;
    margin-top: 20px;
    padding: 12px 20px;
    font-size: 16px;

    :hover {
        transform: scale(0.97);
    }

    :focus {
        outline: 0;
    }
`;