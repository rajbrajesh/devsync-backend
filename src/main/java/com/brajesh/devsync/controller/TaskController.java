package com.brajesh.devsync.controller;

import com.brajesh.devsync.entity.Difficulty;
import com.brajesh.devsync.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import com.brajesh.devsync.dto.TaskRequestDto;
import com.brajesh.devsync.dto.TaskResponseDto;
import com.brajesh.devsync.entity.Task;
import com.brajesh.devsync.service.TaskService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.RequestParam;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import java.util.*;

@Tag(name = "Task APIs", description = "APIs for managing tasks in DevSync")
@RestController
@RequestMapping("/api/tasks")
@CrossOrigin(origins = "http://localhost:5173")   //to connect with React
public class TaskController {

    // Service layer object
    private final TaskService taskService;

    // Inject repository (Spring automatically object create karega)
    @Autowired
    private TaskRepository taskRepository;

    // Constructor Injection (Spring automatically injects TaskService)
    public TaskController(TaskService taskService){
        this.taskService = taskService;
    }

    // API to fetch all tasks
    @Operation(summary = "Get all tasks",
            description = "Fetch all tasks with pagination support"
    )
    @GetMapping
    public List<TaskResponseDto> getTasks(){
        // Returning DTO response instead of entity
        return taskService.getAllTasks();
    }

    // Get task by ID
    @Operation(
            summary = "Get task by ID",
            description = "Fetch a single task using its ID"
    )
    @GetMapping("/{id}")
    public Task getTaskById(@PathVariable Long id){

        // PathVariable takes value from URL
        // Example: /api/tasks/5 - id = 5

        return taskService.getTaskById(id);
    }

    // API to create a new task
    @Operation(
            summary = "Create new task",
            description = "Add a new task to the system"
    )
    @PostMapping
    public Task addTask(@Valid @RequestBody TaskRequestDto dto) {

        // Convert DTO -> Entity
        Task task = new Task();
        task.setTitle(dto.getTitle());
        task.setPlatform(dto.getPlatform());
        task.setDifficulty(dto.getDifficulty());

        return taskService.addTask(task);
    }


    // Update task by ID
    @Operation(
            summary = "Update task",
            description = "Update an existing task"
    )
    @PutMapping("/{id}")
    public Task updateTask(
            @PathVariable Long id,
            @Valid @RequestBody TaskRequestDto dto
    ) {
        return taskService.updateTask(id, dto);
    }


    // Delete task by ID
    @Operation(
            summary = "Delete task",
            description = "Delete a task by ID"
    )
    @DeleteMapping("/{id}")
    public String deleteTask(@PathVariable Long id){

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

    // API to search tasks using title or platform filters
    @Operation(
            summary = "Search tasks",
            description = "Search tasks using title and platform filters"
    )
    @GetMapping("/search/advanced")
    public List<TaskResponseDto> searchTasks(

            // optional query parameter
            @RequestParam(required = false) String title,

            // optional query parameter
            @RequestParam(required = false) String platform,

            @RequestParam(required = false) Difficulty difficulty
    ){
        return taskService.searchTasks(title, platform, difficulty);
    }

    // API to fetch tasks sorted by a field
    @Operation(
            summary = "Get sorted tasks",
            description = "Fetch tasks sorted by title or platform"
    )
    @GetMapping("/sorted")
    public List<TaskResponseDto> getSortedTasks(

            // query parameter example: ?sortBy=title
            @RequestParam String sortBy
    ){
        return taskService.getSortedTasks(sortBy);
    }

    // Get summary of tasks
    // Returns total tasks count
    @GetMapping("/summary")
    public Map<String, Long> getTaskSummary() {

        Map<String, Long> summary = new HashMap<>();

        // total tasks count
        long total = taskRepository.count();

        // ✅ Count by difficulty
        long easy = taskRepository.countByDifficulty(Difficulty.EASY);
        long medium = taskRepository.countByDifficulty(Difficulty.MEDIUM);
        long hard = taskRepository.countByDifficulty(Difficulty.HARD);

        summary.put("total", total);
        summary.put("easy", easy);
        summary.put("medium", medium);
        summary.put("hard", hard);

        return summary;
    }

}
