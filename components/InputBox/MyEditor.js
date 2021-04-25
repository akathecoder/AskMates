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

export default function MyEditor({
  minHeight,
  className,
  setData,
}) {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  const contentState = editorState.getCurrentContent();

  let html = stateToHTML(contentState);

  // console.log(typeof html);

  if (setData) {
    setData(html);
  }

  return (
    <div className={className}>
      {/* {parse(html)} */}
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName dark:bg-dark-black dark:text-dark-text dark:border-dark-background"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName bg-white border border-gray-300 dark:border-dark-background leading-snug text-lg px-4 dark:bg-dark-black dark:text-dark-text"
        editorStyle={{
          minHeight: minHeight,
        }}
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
    </div>
  );
}
