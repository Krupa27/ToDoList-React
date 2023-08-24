import React, { useState } from "react";

function CreateArea(props) {
  const [note, setnote] = useState({
    title: "",
    content: ""
  });

  function handlechange(event) {
    const { name, value } = event.target;
    setnote((prevnote) => {
      return {
        ...prevnote,
        [name]: value
      };
    });
  }

  function submitnote(event) {
    props.onAdd(note);
    setnote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handlechange}
          name="title"
          value={note.title}
          placeholder="Title"
        />
        <textarea
          onChange={handlechange}
          name="content"
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitnote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
