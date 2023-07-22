import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    const { name, value } = e.target;

    setNote((pre) => {
      if (name === "title") {
        return {
          title: value,
          content: pre.content,
        };
      } else {
        return {
          title: pre.title,
          content: value,
        };
      }
    });
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          props.add(note);
          e.preventDefault();
        }}
      >
        <input
          name="title"
          placeholder="Title"
          onChange={handleSubmit}
          value={note.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleSubmit}
          value={note.content}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
