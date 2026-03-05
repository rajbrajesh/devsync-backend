package com.brajesh.devsync.service;

import com.brajesh.devsync.entity.Task;
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

        // findById returns Optional
        // Optional is used because record may or may not exist

        Optional<Task> task = taskRepository.findById(id);

        // If task found return it
        if(task.isPresent()){
            return task.get();
        }

        // If not found return null (temporary - we will improve later)
        return null;
    }
}
