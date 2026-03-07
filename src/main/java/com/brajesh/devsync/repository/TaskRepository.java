package com.brajesh.devsync.repository;

import com.brajesh.devsync.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.*;

public interface TaskRepository extends JpaRepository<Task, Integer> {
    List<Task> findByPlatform(String platform);

    // This method will automatically generate SQL query
    // SELECT * FROM task WHERE platform = ? AND title = ?
    List<Task> findByPlatformAndTitle(String platform, String title);
}
