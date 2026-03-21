package com.brajesh.devsync.dto;

import com.brajesh.devsync.entity.Difficulty;

// DTO used to send task data to client
// This prevents exposing internal entity structure
public class TaskResponseDto {

    // Unique task ID
    private int id;

    // Title of the coding problem
    private String title;

    // Platform like LeetCode, Codeforces etc
    private String platform;

    private Difficulty difficulty;

    // Constructor
    public TaskResponseDto(int id, String title, String platform,Difficulty difficulty) {
        this.id = id;
        this.title = title;
        this.platform = platform;
        this.difficulty = difficulty;
    }

    // Getters
    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getPlatform() {
        return platform;
    }

    public Difficulty getDifficulty(){return difficulty;}
}