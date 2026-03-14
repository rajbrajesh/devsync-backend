// API layer for Task related backend calls
// This file communicates with Spring Boot backend

const BASE_URL = "http://localhost:8080/api/tasks";

/**
 * Fetch all tasks from backend
 */
export async function fetchTasks() {

    const response = await fetch(BASE_URL);

    if (!response.ok) {
        throw new Error("Failed to fetch tasks");
    }

    return response.json();
}

/**
 * Create a new task
 */
export async function createTask(task) {

  const response = await fetch(BASE_URL, {

    method: "POST",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify(task)

  });

  if (!response.ok) {
    throw new Error("Failed to create task");
  }

  return response.json();
}

/**
 * Delete a task by ID
 * @param {number} id - ID of task to delete
 */
export async function deleteTask(id) {

  // fetch API used to call backend endpoint
  const response = await fetch(`${BASE_URL}/${id}`, {

    method: "DELETE" // HTTP method for deleting resource

  });

  // if backend returns error
  if (!response.ok) {

    throw new Error("Failed to delete task");

  }

}

/**
 * Update existing task
 * @param {number} id - task id
 * @param {object} task - updated task data
 */
export async function updateTask(id, task) {

  const response = await fetch(
    `${BASE_URL}/${id}`,
    {

      method: "PUT", // HTTP method for updating resource

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify(task)

    }
  );

  if (!response.ok) {

    throw new Error("Failed to update task");

  }

  return response.json();

}