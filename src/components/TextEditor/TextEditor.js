import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { useRef, useState } from "react";
import { EditorState } from "draft-js";

const TextEditor = () => {
    const [text, setText] = useState('')
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
      const textRef = useRef();

     const editChange = (value) => {
         console.log(value.blocks)
         setText(value.blocks)
         
     }
   
    return ( 
        <div>
            <Editor 
            ref={textRef}
             editorState = {editorState}
             toolbarClassName='toolbarClassName'
             wrapperClassName="wrapperClassName"
             editorClassName="editorClassName"
             onEditorStateChange={setEditorState}
             onContentStateChange={editChange}
            />

          
        </div>
     );
}
 
export default TextEditor;


// {Object.keys(text).map((key) => {
//     return text[key].text
// })}