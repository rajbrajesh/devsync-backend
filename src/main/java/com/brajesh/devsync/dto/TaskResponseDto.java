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

    // Constructor
    public TaskResponseDto(int id, String title, String platform) {
        this.id = id;
        this.title = title;
        this.platform = platform;
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
}