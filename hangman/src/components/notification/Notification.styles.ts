import styled from "styled-components";

type NotificationProp = {
    show: boolean
};

export const NotificationContainer = styled.div<NotificationProp>`
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 10px 10px 0 0;
    padding: 15px 20px;
    position: absolute;
    bottom: -50px;
    transition: transform 0.3s ease-in-out;
    transform: ${
    ({ show }) => show ? "translateY(-50px)" : "none"
    };

    p {
        margin: 0;
    }
`;