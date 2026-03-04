package com.brajesh.devsync.repository;

import com.brajesh.devsync.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Integer> {
}
