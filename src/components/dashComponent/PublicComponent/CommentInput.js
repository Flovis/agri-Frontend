import React, { useState } from "react";

const CommentInput = ({ onSave }) => {
  const [comment, setComment] = useState("");

  const handleInputChange = (e) => {
    setComment(e.target.value);
  };

  const handleSave = () => {
    onSave(comment);
    setComment("");
  };

  return (
    <div className="flex flex-col mb-4">
      <label
        htmlFor="comment"
        className="text-sm font-medium text-gray-700 mb-1"
      >
        Commentaires ou notes internes :
      </label>
      <div className="flex">
        <input
          type="text"
          id="comment"
          className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          value={comment}
          onChange={handleInputChange}
        />
        <button
          type="button"
          className="px-4 py-2 ml-2 font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600"
          onClick={handleSave}
        >
          Enregistrer
        </button>
      </div>
    </div>
  );
};

export default CommentInput;
