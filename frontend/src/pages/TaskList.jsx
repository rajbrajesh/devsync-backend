import { useEffect, useState } from "react";
import { fetchTasks } from "../api/taskApi";
import AddTask from "../components/AddTask";

/**
 * TaskList Component
 * Displays all coding tasks
 */
function TaskList() {

  const [tasks, setTasks] = useState([]);

  // Runs when component loads
  useEffect(() => {
    loadTasks();
  }, []);

  async function loadTasks() {

    try {

      const data = await fetchTasks();

      setTasks(data);

    } catch (error) {

      console.error("Error fetching tasks:", error);

    }

  }

  return (

    <div>
    
      <AddTask onTaskAdded={loadTasks} />
     
      <h2>Task List</h2>

      {tasks.length === 0 ? (

        <p>No tasks available</p>

      ) : (

        <ul>

          {tasks.map((task) => (

            <li key={task.id}>

              <strong>{task.title}</strong>

              <br />

              Platform: {task.platform}

            </li>

          ))}

        </ul>

      )}

    </div>

  );

}

export default TaskList;