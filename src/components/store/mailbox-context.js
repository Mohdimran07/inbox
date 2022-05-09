import React from "react";

const MailBoxContext = React.createContext({
    token: '',
    isLoggedIn : false,
    login: (token) => {},
    
});

export default MailBoxContext;