import React, { useRef } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useState } from "react";
import { EditorState } from "draft-js";
import axios from "axios";
import { useHistory } from "react-router-dom";

const StartingPage = () => {
  const history = useHistory();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const emailInputRef = useRef();
  const subInputRef = useRef();
  const [text, setText] = useState("");
  const editChange = (value) => {
    console.log(value.blocks);
    setText(value.blocks);
  };

  const mail = Object.keys(text).map((key) => {
    return text[key].text;
  });
  console.log(mail);

  const submitHandler = (e) => {
    e.preventDefault();
    const emailValue = emailInputRef.current.value;
    const subjectValue = subInputRef.current.value;
    const mailText = mail;
    console.log(mailText);

    let string = localStorage.getItem("userId");
    let email = string.replace(/[&,+()$~%@.'":*?<>{}]/g, "");
    console.log(email);

    axios
      .post(
        `https://mailbox-data-default-rtdb.firebaseio.com/maildata${email}.json`,
        {
          To: emailValue,
          sub: subjectValue,
          mail: mailText,
        }
      )
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };

  // const backButtonHandler = () => {
  //   history.replace('/inbox');
  // };
  return (
    <section style={{ padding: "20px" }}>
      <h1>Welcome to mail Box</h1>
      <div>
        <span>To: </span>
        <span>
          <input type="email" ref={emailInputRef} required />
        </span>
      </div>
      <div>
        <span>subject: </span>
        <span>
          <input type="text" ref={subInputRef} required />
        </span>
      </div>
      <div>
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={setEditorState}
          onContentStateChange={editChange}
        />
      </div>
      <div>
        <button onClick={submitHandler}>Send</button>
      </div>
      <div>
        {/* <button onClick={backButtonHandler}>Go Back</button> */}
      </div>
    </section>
  );
};

export default StartingPage;
