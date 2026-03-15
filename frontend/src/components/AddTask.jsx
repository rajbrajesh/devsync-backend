import { useState } from "react";
import { createTask } from "../api/taskApi";

/**
 * AddTask Component
 * Allows user to add a new coding task
 */
function AddTask({ onTaskAdded }) {

  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState("");

  async function handleSubmit(e) {

    e.preventDefault();

    const newTask = {
      title: title,
      platform: platform
    };

    try {

      await createTask(newTask);

      // clear form
      setTitle("");
      setPlatform("");

      // refresh task list
      onTaskAdded();

    } catch (error) {

      console.error("Error creating task:", error);

    }

  }

  return (

    <div style={{marginBottom:"20px"}}>

      <h3>Add New Task</h3>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{padding:"10px", gap:"20px",margin:"10px"}}
        />
        
        <input
          type="text"
          placeholder="Platform (Coding platform Name)"
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          required
          style={{padding:"10px", gap:"20px",margin:"10px"}}
        />
        
        <button type="submit" style={{padding:"10px", gap:"20px",margin:"10px"}}>
          Add Task
        </button>
      </form>

    </div>

  );

}

export default AddTask;