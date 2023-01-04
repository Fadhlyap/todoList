import React from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useEffect } from "react";

const EditForm = ({ editedTask, updateTask }) => {
  const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);

  useEffect(()=> {
    const closeModalIfEscaped = (e) => {
        e.key === "Escape" && closeEditMode()
    }

    window.addEventListener('keydown', closeModalIfEscaped)

    return () => {
        window. removeEventListener('keydown', closeModalIfEscaped)
    }
  }, [])

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateTask({...editedTask, name: updatedTaskName})
  };

  return (
    <div
      role="dialog"
      aria-labelledby="editTask"
      onClick={(e) => {e.target === e.currentTarget && closeEditMode()}}
    >
      <form className="todo" onSubmit={handleFormSubmit}>
        <div className="wrapper">
          <input
            type="text"
            id="editTask"
            className="input"
            value={updatedTaskName}
            onInput={(e) => setUpdatedTaskName(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder="Update your list"
          />
          <label htmlFor="editTask" className="label">
            Update your list
          </label>
        </div>
        <button
          className="btn"
          aria-label={`Confirm edited task to now read ${updatedTaskName}`}
          type="submit"
        >
            <CheckIcon strokeWidth={2} height="24" />
        </button>
      </form>
    </div>
  );
};

export default EditForm;
