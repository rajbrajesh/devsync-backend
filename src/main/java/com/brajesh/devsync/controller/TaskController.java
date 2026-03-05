package com.brajesh.devsync.controller;

import com.brajesh.devsync.dto.TaskRequestDto;
import com.brajesh.devsync.entity.Task;
import com.brajesh.devsync.service.TaskService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.PostMapping; //imports for post services.
import org.springframework.web.bind.annotation.RequestBody;

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

    // API to create a new task
    @PostMapping("/api/tasks")
    public Task addTask(@Valid @RequestBody TaskRequestDto dto) {

        // Convert DTO -> Entity
        Task task = new Task();
        task.setTitle(dto.getTitle());
        task.setPlatform(dto.getPlatform());

        return taskService.addTask(task);
    }
}
