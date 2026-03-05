package com.brajesh.devsync.controller;

import com.brajesh.devsync.dto.TaskRequestDto;
import com.brajesh.devsync.entity.Task;
import com.brajesh.devsync.service.TaskService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
public class TaskController {

    // Service layer object
    private final TaskService taskService;

    // Constructor Injection (Spring automatically injects TaskService)
    public TaskController(TaskService taskService){
        this.taskService = taskService;
    }

    // API to fetch all tasks
    @GetMapping("/api/tasks")
    public List<Task> getTasks(){
        return taskService.getAllTasks();
    }

    // Get task by ID
    @GetMapping("/api/tasks/{id}")
    public Task getTaskById(@PathVariable Integer id){

        // PathVariable takes value from URL
        // Example: /api/tasks/5 → id = 5

        return taskService.getTaskById(id);
    }

    // API to create a new task
    @PostMapping("/api/tasks")
    public Task addTask(@Valid @RequestBody TaskRequestDto dto) {

        // Convert DTO -> Entity
        Task task = new Task();
        task.setTitle(dto.getTitle());
        task.setPlatform(dto.getPlatform());

        return taskService.addTask(task);
    }

    // Update task by ID
    @PutMapping("/api/tasks/{id}")
    public Task updateTask(
            @PathVariable Integer id,
            @Valid @RequestBody TaskRequestDto dto
    ) {
        return taskService.updateTask(id, dto);
    }
}
