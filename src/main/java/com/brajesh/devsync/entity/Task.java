package com.brajesh.devsync.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

@Entity
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotBlank(message = "Title cannot be empty")
    private String title;

    @NotBlank(message = "Platform cannot be empty")
    private String platform;

    @NotBlank(message = "Difficulty cannot be empty")
    private String difficulty;

    public Task(){
        // Needed for JSON deserialization
    }
    public Task(Integer id,String title,String platform, String difficulty){
        this.id = id;
        this.title = title;
        this.platform = platform;
        this.difficulty = difficulty;
    }

    public int getId(){
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }


    public String getTitle(){
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }


    public String getPlatform(){
        return platform;
    }
    public void setPlatform(String platform) {
        this.platform = platform;
    }

    public String getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(String difficulty) {
        this.difficulty = difficulty;
    }
}
