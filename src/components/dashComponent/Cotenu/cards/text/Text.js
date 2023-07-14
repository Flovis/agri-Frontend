import React from "react";

export default function Text({ content }) {
  return (
    <>
      {content ? (
        <div className="border bg-custom-white border-borde-gray rounded-lg  p-2">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      ) : (
        <div className="border bg-custom-white border-borde-gray rounded-lg  p-2">
          pas des contenus Texte...
        </div>
      )}
    </>
  );
}
