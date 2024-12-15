import React, { useState } from 'react';

const App = () => {
  const [input, setInput] = useState('');
  const [showAr, setShowAr] = useState([]);
  const [edit, setEdit] = useState('');
  const [editIndex, setEditIndex] = useState(null); // New state to track which item is being edited

  // Function to handle form submission and add new todo
  function handelForm(e) {
    e.preventDefault();
    if (input) {
      setShowAr((prev) => [...prev, input]);
      setInput('');
    }
  }

  // Function to handle deleting a todo
  function deleteBtn(index) {
    setShowAr((prev) => prev.filter((_, id) => id !== index));
  }

  // Function to handle editing a todo
  function editBtn(index) {
    setEditIndex(index); // Set the index of the item being edited
    setEdit(showAr[index]); // Set the input field with the current todo's value
  }

  // Function to save the edited todo
  function saveEdit() {
    if (editIndex !== null) {
      setShowAr((prev) =>
        prev.map((item, index) =>
          index === editIndex ? edit : item
        )
      );
      setEdit(''); // Clear the edit input field
      setEditIndex(null); // Reset the editIndex state
    }
  }

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handelForm}>
        <span>Notes</span>
        <input
          type="text"
          placeholder="Enter To-Do item"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <ul>
        {showAr.map((currentVal, index) => (
          <li key={index}>
            {editIndex === index ? (
              // If the item is being edited, show the edit input field and save button
              <>
                <input
                  type="text"
                  value={edit}
                  onChange={(e) => setEdit(e.target.value)}
                />
                <button onClick={saveEdit}>Save</button>
              </>
            ) : (
              // If the item is not being edited, show the todo item
              <span>{currentVal}</span>
            )}
            <button onClick={() => deleteBtn(index)}>Delete</button>
            {editIndex !== index && (
              <button onClick={() => editBtn(index)}>Edit</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
