import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";

export default function FileInput({ editor, seteditor }) {
  const content = useRef(null);

  return (
    <>
      <JoditEditor
        ref={content}
        value={editor}
        onChange={(newContent) => seteditor(newContent)}
      />
    </>
  );
}
