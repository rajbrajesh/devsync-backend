import { useEffect, useState } from "react";
import { fetchTasks } from "../api/taskApi";

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