package com.brajesh.devsync.controller;

import com.brajesh.devsync.dto.TaskRequestDto;
import com.brajesh.devsync.dto.TaskResponseDto;
import com.brajesh.devsync.entity.Task;
import com.brajesh.devsync.service.TaskService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.*;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    // Service layer object
    private final TaskService taskService;

    // Constructor Injection (Spring automatically injects TaskService)
    public TaskController(TaskService taskService){
        this.taskService = taskService;
    }

    // API to fetch all tasks
    @GetMapping
    public List<TaskResponseDto> getTasks(){
        // Returning DTO response instead of entity
        return taskService.getAllTasks();
    }

    // Get task by ID
    @GetMapping("/{id}")
    public Task getTaskById(@PathVariable int id){

        // PathVariable takes value from URL
        // Example: /api/tasks/5 → id = 5

        return taskService.getTaskById(id);
    }

    // API to create a new task
    @PostMapping
    public Task addTask(@Valid @RequestBody TaskRequestDto dto) {

        // Convert DTO -> Entity
        Task task = new Task();
        task.setTitle(dto.getTitle());
        task.setPlatform(dto.getPlatform());

        return taskService.addTask(task);
    }

    // Update task by ID
    @PutMapping("/{id}")
    public Task updateTask(
            @PathVariable Integer id,
            @Valid @RequestBody TaskRequestDto dto
    ) {
        return taskService.updateTask(id, dto);
    }

    // Delete task by ID
    @DeleteMapping("/{id}")
    public String deleteTask(@PathVariable int id){

        taskService.deleteTask(id);

        return "Task deleted successfully";
    }

    //Api to fetch all task by pagenation
    @GetMapping("/paginated")
    public Page<Task> getTasks(Pageable pageable){

        return taskService.getTasks(pageable);
    }

    //Api to serch task by platform
    @GetMapping("/search")
    public List<Task> searchTasks(@RequestParam String platform){

        return taskService.getTasksByPlatform(platform);
    }

    // API endpoint to filter tasks based on platform and title
    @GetMapping("/filter")
    public List<Task> filterTasks(

            // Reads platform from query parameter
            // Example: ?platform=LeetCode
            @RequestParam String platform,

            // Reads title from query parameter
            // Example: ?title=Graph
            @RequestParam String title
    ){

        // Calls service layer to perform filtering
        return taskService.filterTasks(platform, title);
    }
}
