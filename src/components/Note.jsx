import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={() => {
          props.onDelete(props.id);
        }}
        className="custom-btn btn-16"
      >
        DELETE
      </button>
    </div>
  );
}

export default Note;
