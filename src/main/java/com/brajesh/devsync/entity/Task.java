package com.brajesh.devsync.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotBlank(message = "Title cannot be empty")
    private String title;

    @NotBlank(message = "Platform cannot be empty")
    private String platform;

    @NotNull(message = "Difficulty cannot be empty")
    @Enumerated(EnumType.STRING)  // store as text in DB
    private Difficulty difficulty;

    public Task(){
        // Needed for JSON deserialization
    }
    public Task(Integer id,String title,String platform, Difficulty difficulty){
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

    public Difficulty getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(Difficulty difficulty) {
        this.difficulty = difficulty;
    }
}
