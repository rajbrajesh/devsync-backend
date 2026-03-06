package com.brajesh.devsync.exception;

// Custom exception for when task is not found
public class TaskNotFoundException extends RuntimeException {

    public TaskNotFoundException(String message){
        super(message);
    }

}
