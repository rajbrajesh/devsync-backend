package com.brajesh.devsync.service;

import com.brajesh.devsync.dto.TaskRequestDto;
import com.brajesh.devsync.entity.Task;
import com.brajesh.devsync.exception.TaskNotFoundException;
import com.brajesh.devsync.repository.TaskRepository;
import org.springframework.stereotype.Service;

//imports for pagination
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


//imports for Logging
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.*;

@Service
public class TaskService {

    // Logger object for logging application events
    private static final Logger logger =  LoggerFactory.getLogger(TaskService.class);

    private final TaskRepository taskRepository;

    // Constructor Injection
    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    // Fetch all tasks
    public List<Task> getAllTasks() {

        logger.info("Fetching all task from database");

        return taskRepository.findAll();
    }

    // Add new task  - Save task to DB
    public Task addTask(Task task) {

        logger.info("Creating new task for platform {}", task.getPlatform());

        // Save task into database
        return taskRepository.save(task);
    }

    // Get single task using ID
    public Task getTaskById(Integer id){

        logger.info("Fetching task with id: {} ",id);

        return taskRepository.findById(id)
                .orElseThrow(() -> new TaskNotFoundException("Task not found with id: " + id));
    }

    // Update existing task
    public Task updateTask(Integer id, TaskRequestDto dto) {

        logger.info("updating task with id {}",id);

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

        logger.info("Deleting task with id {}",id);

        // Check if task exists
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Task not found"));

        // Delete task
        taskRepository.delete(task);
    }

    //Pagination implemented for fetching the task
    public Page<Task> getTasks(Pageable pageable){

        logger.info("Fetching tasks with pagination");

        return taskRepository.findAll(pageable);
    }

    //search by platform
    public List<Task> getTasksByPlatform(String platform){

        logger.info("Searching tasks for platform {}", platform);

        return taskRepository.findByPlatform(platform);
    }
}
