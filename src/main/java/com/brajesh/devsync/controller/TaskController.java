package com.brajesh.devsync.controller;

import com.brajesh.devsync.dto.TaskRequestDto;
import com.brajesh.devsync.model.Task;
import com.brajesh.devsync.service.TaskService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.PostMapping; //imports for post services.
import org.springframework.web.bind.annotation.RequestBody;

import jakarta.validation.Valid;
import java.util.*;

@RestController
public class TaskController {
    private final TaskService taskService;

    public TaskController(TaskService taskService){
        this.taskService = taskService;
    }

    @GetMapping("/tasks")
    public List<Task> getTasks(){
        return taskService.getAllTasks();
    }

    @PostMapping("/tasks")
    public Task addTask(@Valid @RequestBody TaskRequestDto dto) {
        Task task = new Task();
        task.setTitle(dto.getTitle());
        task.setPlatform(dto.getPlatform());

        return taskService.addTask(task);
    }
}
