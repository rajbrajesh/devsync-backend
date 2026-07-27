package com.brajesh.devsync.dto;

import com.brajesh.devsync.entity.Difficulty;
import com.brajesh.devsync.entity.Status;

// DTO used to send task data to client
// This prevents exposing internal entity structure
public class TaskResponseDto {

    // Unique task ID
    private Long id;

    // Title of the coding problem
    private String title;

    // Platform like LeetCode, Codeforces etc
    private String platform;

    private Difficulty difficulty;

    private Status status;

    // Constructor
    public TaskResponseDto(Long id, String title, String platform, Difficulty difficulty, Status status) {
        this.id = id;
        this.title = title;
        this.platform = platform;
        this.difficulty = difficulty;
        this.status = status;
    }

    // Getters
    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getPlatform() {
        return platform;
    }

    public Difficulty getDifficulty(){return difficulty;}

    public Status getStatus() {
        return status;
    }
}