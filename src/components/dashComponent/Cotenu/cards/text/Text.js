import React from "react";

export default function Text({ file }) {
  console.log("content: ", file);
  return (
    <>
      {file ? (
        <div className="border bg-custom-white border-borde-gray rounded-lg  p-2 overflow-y-auto h-44">
          <h1>{file.titre} </h1>
          <div dangerouslySetInnerHTML={{ __html: file.contentText }} />
        </div>
      ) : (
        <div className="border bg-custom-white border-borde-gray rounded-lg  p-2">
          pas des contenus Texte...
        </div>
      )}
    </>
  );
}
