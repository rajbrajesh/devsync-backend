import { useEffect, useState } from "react";
import { fetchTasks, deleteTask, updateTask} from "../api/taskApi";
import AddTask from "../components/AddTask";

/**
 * TaskList Component
 * Responsible for displaying and managing tasks
 */
function TaskList() {

  // React state to store tasks from backend
  const [tasks, setTasks] = useState([]);

  // stores task currently being edited
  const [editingTaskId, setEditingTaskId] = useState(null);

  // input values for editing
  const [editTitle, setEditTitle] = useState("");
  const [editPlatform, setEditPlatform] = useState("");

  /**
   * useEffect hook
   * Runs when component loads for the first time
   */
  // Runs when component loads
  useEffect(() => {
    loadTasks();
  }, []);

  function startEditing(task) {

    setEditingTaskId(task.id);

    setEditTitle(task.title);

    setEditPlatform(task.platform);
}

  /**
   * Fetch tasks from backend
   */
  async function loadTasks() {

    try {

      const data = await fetchTasks();

      setTasks(data);

    } catch (error) {

      console.error("Error fetching tasks:", error);

    }

  }


  /**
   * Handle delete button click
   */
  async function handleDelete(id) {

    try {

      await deleteTask(id); // call backend delete API

      // reload tasks after deletion
      loadTasks();

    } catch (error) {

      console.error("Delete failed:", error);

    }

  }

  /**
   * Handle update button click
   */
  async function handleUpdate() {

  try {

    await updateTask(editingTaskId, {

      title: editTitle,
      platform: editPlatform

    });

    // exit edit mode
    setEditingTaskId(null);

    // reload tasks
    loadTasks();

  } catch (error) {

    console.error("Update failed:", error);

  }

}

  return (

    <div>
    
      {/* Component for adding new task */}
      <AddTask onTaskAdded={loadTasks} />
     
      <h2>Task List</h2>

      {/* Conditional Rendering */}
      {tasks.length === 0 ? (

        <p>No tasks available</p>

      ) : (

        <ul>

          {tasks.map((task) => (

            <li key={task.id}>

              {editingTaskId === task.id ? (
                <div>
                  <input
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                  />

                  <input
                    value={editPlatform}
                    onChange={(e) => setEditPlatform(e.target.value)}
                  />

                  <button onClick={handleUpdate}>
                    Save
                  </button>

                </div>

              ) : (

                <li className="task-item">
                  <div className="task-info">
                    <strong>Title: {task.title}</strong>
                    <span>Platform: {task.platform}</span>
                  </div>

                  <div className="task-buttons">
                    <button onClick={() => startEditing(task)}>Edit</button>
                    <button onClick={() => handleDelete(task.id)}>Delete</button>
                  </div>
                </li>
              )}
            </li>
          ))}

        </ul>

      )}

    </div>

  );

}

export default TaskList;