package com.brajesh.devsync.service;

import com.brajesh.devsync.dto.TaskRequestDto;
import com.brajesh.devsync.entity.Task;
import com.brajesh.devsync.exception.TaskNotFoundException;
import com.brajesh.devsync.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class TaskService {

    private final TaskRepository taskRepository;

    // Constructor Injection
    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    // Fetch all tasks
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    // Add new task  - Save task to DB
    public Task addTask(Task task) {

        // Save task into database
        return taskRepository.save(task);
    }

    // Get single task using ID
    public Task getTaskById(Integer id){

        System.out.println("Fetching task with id: " + id);

        return taskRepository.findById(id)
                .orElseThrow(() -> new TaskNotFoundException("Task not found with id: " + id));
    }

    // Update existing task
    public Task updateTask(Integer id, TaskRequestDto dto) {

        // Step 1: Find task from database
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new TaskNotFoundException("Task not found with id: " + id));

        // Step 2: Update fields
        task.setTitle(dto.getTitle());
        task.setPlatform(dto.getPlatform());

        // Step 3: Save updated task
        return taskRepository.save(task);
    }

    // Delete task by ID
    public void deleteTask(Integer id) {

        // Check if task exists
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Task not found"));

        // Delete task
        taskRepository.delete(task);
    }
}
