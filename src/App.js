import "./App.css";
import React, { useContext } from "react";

import Form from "./components/Form/Form";
import Layout from "./components/Layout/Layout";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import StartingPage from "./components/pages/StartingPage";
import MailBoxContext from "./components/store/mailbox-context";
import Inbox from "./components/pages/Inbox";



function App() {
  const mailCtx = useContext(MailBoxContext);

  const isLoggedIn = mailCtx.isLoggedIn;

  return (
    <Layout>
      <Switch>
        {isLoggedIn && (<Route path="/inbox" >
          <Inbox />
        </Route>)}
        {isLoggedIn && (<Route path="/startingpage">
          <StartingPage />
        </Route>)}
        <Route path='/login'>
          <Form />
        </Route>
      </Switch>
    </Layout>
   
  );
}

export default App;


