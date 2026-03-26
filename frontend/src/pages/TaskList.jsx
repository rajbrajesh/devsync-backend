import { useEffect, useState } from "react";
import { searchTasks,fetchTasks, deleteTask, updateTask} from "../api/taskApi";
import AddTask from "../components/task/AddTask";
import { fetchPaginatedTasks } from "../api/taskApi";

/**
 * TaskList Component
 * Responsible for displaying and managing tasks
 */
function TaskList() {

  // React state to store tasks from backend
  const [tasks, setTasks] = useState([]);

  // search input value
  const [searchTerm,setSearchTerm] = useState("")

  // platform filter state
  const [platformFilter,setPlatformFilter] = useState("All")


  // stores task currently being edited
  const [editingTaskId, setEditingTaskId] = useState(null);

  // input values for editing
  const [editTitle, setEditTitle] = useState("");
  const [editPlatform, setEditPlatform] = useState("");

  const [editDifficulty, setEditDifficulty] = useState("");

  const [difficultyFilter, setDifficultyFilter] = useState("All");

  const [page, setPage] = useState(0);
  const [size] = useState(5);
  const [totalPages, setTotalPages] = useState(0);
  const [sortBy, setSortBy] = useState("title");


  /**
   * useEffect hook
   * Runs when component loads for the first time
   */
  // Runs when component loads
  useEffect(() => {
  loadTasks();
}, [page, sortBy]);

  function startEditing(task) {

    setEditingTaskId(task.id);

    setEditTitle(task.title);

    setEditPlatform(task.platform);

    setEditDifficulty(task.difficulty || "");
}

  /**
   * Fetch tasks from backend
   */
//   async function loadTasks() {

//   try {

//     const data = await searchTasks(
//       searchTerm,
//       platformFilter,
//       difficultyFilter
//     );

//     setTasks(data);

//   } catch (error) {

//     console.error("Error fetching tasks:", error);

//   }

// }
  async function loadTasks() {

    try {

      const data = await fetchPaginatedTasks(page, size, sortBy);

      setTasks(data.content);
      setTotalPages(data.totalPages);

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
      platform: editPlatform,
      difficulty: editDifficulty

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

      {/* Search Bar */}
      <div style={{marginBottom:"20px"}}>
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}

          onChange={(e)=>setSearchTerm(e.target.value)}

          style={{
            padding:"8px",
            width:"250px",
            borderRadius:"5px",
            border:"1px solid #ccc"
          }}
        />

        {/* Difficulty Filter */}
        <select
          value={difficultyFilter}
          onChange={(e) => setDifficultyFilter(e.target.value)}
          style={{
            marginLeft:"10px",
            padding:"8px",
            borderRadius:"5px"
          }}
        >
          <option value="All">All Difficulties</option>
          <option value="EASY">Easy</option>
          <option value="MEDIUM">Medium</option>
          <option value="HARD">Hard</option>
        </select>

        {/* Platform Filter */}
        <select
        value={platformFilter}

        onChange={(e)=>setPlatformFilter(e.target.value)}

        style={{
          marginLeft:"10px",
          padding:"8px",
          borderRadius:"5px"
        }}
        >

        <option value="All">All Platforms</option>

        <option value="Leetcode">Leetcode</option>

        <option value="Codechef">Codechef</option>

        <option value="Codeforces">Codeforces</option>

        <option value="GeeksForGeeks">GeeksForGeeks</option>
        </select>

      </div>

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="title">Sort by Title</option>
        <option value="platform">Sort by Platform</option>
        <option value="difficulty">Sort by Difficulty</option>
      </select>


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

                  <select value={editDifficulty} 
                  onChange={(e) => setEditDifficulty(e.target.value)}>
                    <option value="">Select Difficulty</option>
                    <option value="EASY">Easy</option>
                    <option value="MEDIUM">Medium</option>
                    <option value="HARD">Hard</option>
                  </select>

                  <button onClick={handleUpdate}>
                    Save
                  </button>

                </div>

              ) : (

                <li className="task-item">
                  <div className="task-info">
                    <strong>Title: {task.title}</strong>
                    <span>Platform: {task.platform}</span>
                    <span className={`badge ${task.difficulty?.toLowerCase()}`}>
                      {task.difficulty}
                    </span>
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

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 0}
        >
          Prev
        </button>

        <span style={{ margin: "0 10px" }}>
          Page {page + 1} of {totalPages}
        </span>

        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages - 1}
        >
          Next
        </button>
      </div>


    </div>

  );

}

export default TaskList;