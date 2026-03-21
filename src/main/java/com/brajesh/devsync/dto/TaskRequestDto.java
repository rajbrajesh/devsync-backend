package com.brajesh.devsync.dto;

import jakarta.validation.constraints.NotBlank;

public class TaskRequestDto {

    @NotBlank(message="Title Can not be Empty")
    private String title;

    @NotBlank(message="platform can not be blank")
    private String platform;

    @NotBlank(message="difficulty can noot be blank")
    private String difficulty;

    // Getter Setter

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getPlatform() { return platform; }
    public void setPlatform(String platform) { this.platform = platform; }

    public String getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(String difficulty) {
        this.difficulty = difficulty;
    }
}
