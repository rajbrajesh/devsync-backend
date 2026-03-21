package com.brajesh.devsync.dto;

// DTO used to send task data to client
// This prevents exposing internal entity structure
public class TaskResponseDto {

    // Unique task ID
    private int id;

    // Title of the coding problem
    private String title;

    // Platform like LeetCode, Codeforces etc
    private String platform;

    private String difficulty;

    // Constructor
    public TaskResponseDto(int id, String title, String platform,String difficulty) {
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

    public String getDifficulty(){return difficulty;}
}