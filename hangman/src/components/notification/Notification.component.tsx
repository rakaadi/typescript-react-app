import React from "react";

import { NotificationContainer } from "./Notification.styles";

const Notification = ({ showNotification }: { showNotification: boolean }) => {
    return (
        <NotificationContainer show={showNotification} >
            <p>You have already entered this letter</p>
        </NotificationContainer>
    );
};

export default Notification;
