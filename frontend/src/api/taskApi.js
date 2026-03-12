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