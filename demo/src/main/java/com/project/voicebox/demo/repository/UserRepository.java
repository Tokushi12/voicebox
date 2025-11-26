package com.project.voicebox.demo.repository;

import com.project.voicebox.demo.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity, Integer> {}
