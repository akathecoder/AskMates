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

import parse from "html-react-parser";

export default function MyEditor() {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  const contentState = editorState.getCurrentContent();

  let html = stateToHTML(contentState);

  // console.log(typeof html);

  return (
    <>
      {/* {parse(html)} */}
      <h1 className="text-xl mb-4 px-1">Your Answer</h1>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName border border-gray-300 leading-snug text-lg px-4"
        className=""
        onEditorStateChange={setEditorState}
        toolbar={{
          options: [
            "inline",
            // "blockType",
            "list",
            "emoji",
            "image",
          ],
          inline: {
            inDropdown: false,
            className: undefined,
            component: undefined,
            dropdownClassName: undefined,
            options: [
              "bold",
              "italic",
              "underline",
              "strikethrough",
              "monospace",
              "superscript",
              "subscript",
            ],
          },
        }}
      />
    </>
  );
}
