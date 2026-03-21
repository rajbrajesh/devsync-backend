package com.brajesh.devsync.service;

import com.brajesh.devsync.dto.TaskRequestDto;
import com.brajesh.devsync.dto.TaskResponseDto;
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
    // Returns list of TaskResponseDto instead of entity
    public List<TaskResponseDto> getAllTasks() {

        logger.info("Fetching all task");

        // Fetching tasks from database
        List<Task> tasks = taskRepository.findAll();

        // Convert entity list to DTO list
        List<TaskResponseDto> responseList = new ArrayList<>();

        for(Task task : tasks){

            // Creating DTO object for each entity
            TaskResponseDto dto = new TaskResponseDto(
                    task.getId(),
                    task.getTitle(),
                    task.getPlatform(),
                    task.getDifficulty()
            );

            responseList.add(dto);
        }

        return responseList;
    }

    // Add new task  - Save task to DB
    public Task addTask(Task task) {

        logger.info("Creating new task for platform {}", task.getPlatform());

        // Save task into database
        return taskRepository.save(task);
    }

    // Get single task using ID
    public Task getTaskById(Long id){

        logger.info("Fetching task with id: {} ",id);

        return taskRepository.findById(id)
                .orElseThrow(() -> new TaskNotFoundException("Task not found with id: " + id));
    }

    // Update existing task
    public Task updateTask(Long id, TaskRequestDto dto) {

        logger.info("updating task with id {}",id);

        // Step 1: Find task from database
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new TaskNotFoundException("Task not found with id: " + id));

        // Step 2: Update fields
        task.setTitle(dto.getTitle());
        task.setPlatform(dto.getPlatform());
        task.setDifficulty(dto.getDifficulty());

        // Step 3: Save updated task
        return taskRepository.save(task);
    }

    // Delete task by ID
    public void deleteTask(Long id) {

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

    // Service method to filter tasks using platform and title
    public List<Task> filterTasks(String platform, String title){

        // Logging helps track API activity in production
        logger.info("Filtering tasks for platform {} and title {}", platform, title);

        // Calling repository method to fetch filtered tasks
        return taskRepository.findByPlatformAndTitle(platform, title);
    }

    // Method to perform dynamic search
    public List<TaskResponseDto> searchTasks(String title, String platform){

        List<Task> tasks;

        // Case 1 → both title and platform present
        if(title != null && platform != null){
            tasks = taskRepository.findByTitleContainingIgnoreCaseAndPlatform(title, platform);
        }

        // Case 2 → only title present
        else if(title != null){
            tasks = taskRepository.findByTitleContainingIgnoreCase(title);
        }

        // Case 3 → only platform present
        else if(platform != null){
            tasks = taskRepository.findByPlatform(platform);
        }

        // Case 4 → no filter → return all tasks
        else{
            tasks = taskRepository.findAll();
        }

        // Convert Entity → DTO
        List<TaskResponseDto> response = new ArrayList<>();

        for(Task task : tasks){

            TaskResponseDto dto = new TaskResponseDto(
                    task.getId(),
                    task.getTitle(),
                    task.getPlatform(),
                    task.getDifficulty()
            );

            response.add(dto);
        }

        return response;
    }

    // Fetch tasks sorted by a given field
    public List<TaskResponseDto> getSortedTasks(String sortBy){

        // Fetch tasks sorted from database
        List<Task> tasks = taskRepository.findAll(
                org.springframework.data.domain.Sort.by(sortBy)
        );

        // Convert Entity → DTO
        List<TaskResponseDto> response = new ArrayList<>();

        for(Task task : tasks){

            TaskResponseDto dto = new TaskResponseDto(
                    task.getId(),
                    task.getTitle(),
                    task.getPlatform(),
                    task.getDifficulty()
            );

            response.add(dto);
        }

        return response;
    }

}
