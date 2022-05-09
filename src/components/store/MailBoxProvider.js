import React, { useState } from "react";
import MailBoxContext from "./mailbox-context";

const MailBoxContextProvider = (props) => {
  const [token, setToken] = useState(null);

  const userIsLoggedin = !!token;

  const loginHandler = (token, email) => {
    setToken(token);
    localStorage.setItem('userId', email)
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedin,
    login: loginHandler,
  };

  return (
    <MailBoxContext.Provider value={contextValue}>
      {props.children}
    </MailBoxContext.Provider>
  );
};

export default MailBoxContextProvider;
