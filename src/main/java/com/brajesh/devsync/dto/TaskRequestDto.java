package com.brajesh.devsync.dto;

import com.brajesh.devsync.entity.Difficulty;
import com.brajesh.devsync.entity.Status;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class TaskRequestDto {

    @NotBlank(message="Title Can not be Empty")
    private String title;

    @NotBlank(message="platform can not be blank")
    private String platform;

    @NotNull(message="difficulty can noot be blank")
    private Difficulty difficulty;

    private Status status;

    // Getter Setter

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getPlatform() { return platform; }
    public void setPlatform(String platform) { this.platform = platform; }

    public Difficulty getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(Difficulty difficulty) {
        this.difficulty = difficulty;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }
}
