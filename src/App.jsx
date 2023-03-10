import { useState } from "react";

// custom components
import CustomForm from "./components/CustomForm";
import TaskList from "./components/TaskList";
import EditForm from "./components/EditForm";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editedTask, setEditedTask] = useState(null);
  const [PreviousFocusEl, setPreviousFocusEl] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const addTask = (task) => {
    setTasks((prevState) => [...prevState, task]);
  };

  const deleteTask = (id) => {
    setTasks((prevState) => prevState.filter((t) => t.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(prevState => prevState.map(t => (t.id === id 
      ?{...t, checked: !t.checked}
      : t
      )))
  }

  const updateTask = (task) => {
    setTasks((prevState) =>
      prevState.map((t) => (t.id === task.id 
        ? { ...t, name: task.name } 
        : t)))
        closeEditMode()
  }

  const closeEditMode = () => {
    setIsEditing(false)
    PreviousFocusEl.focus()
  }

  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditing(true)
    setPreviousFocusEl(document.activeElement)
  }

  return (
    <div className="container">
      <header>
        {isEditing && (
          <EditForm editedTask={editedTask} updateTask={updateTask} closeEditMode={closeEditMode} />
        )}

        <h1>My Task List</h1>
      </header>
      <CustomForm addTask={addTask} />
      {tasks && (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          enterEditMode={enterEditMode}
        />
      )}
    </div>
  );
}

export default App;
