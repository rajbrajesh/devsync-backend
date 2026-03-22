package com.brajesh.devsync.repository;

import com.brajesh.devsync.entity.Difficulty;
import com.brajesh.devsync.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.*;

public interface TaskRepository extends JpaRepository<Task, Long> {
    List<Task> findByPlatform(String platform);

    // This method will automatically generate SQL query
    // SELECT * FROM task WHERE platform = ? AND title = ?
    List<Task> findByPlatformAndTitle(String platform, String title);

    // Search tasks by title (partial match + case insensitive)
    List<Task> findByTitleContainingIgnoreCase(String title);

    // Search tasks by both title and platform
    List<Task> findByTitleContainingIgnoreCaseAndPlatform(String title, String platform);

    List<Task> findByTitleContainingIgnoreCaseAndPlatformAndDifficulty(String title, String platform,Difficulty difficulty);

    long countByDifficulty(Difficulty difficulty);
}
