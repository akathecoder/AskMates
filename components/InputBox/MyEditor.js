import React from "react";
import {
  convertFromRaw,
  convertToRaw,
  EditorState,
} from "draft-js";

import dynamic from "next/dynamic";
const Editor = dynamic(
  () =>
    import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { stateToHTML } from "draft-js-export-html";

export default function MyEditor() {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  const contentState = editorState.getCurrentContent();

  let html = stateToHTML(contentState);

  return (
    <>
      {html}
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={setEditorState}
      />
    </>
  );
}
