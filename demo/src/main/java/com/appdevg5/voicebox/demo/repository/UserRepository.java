package com.appdevg5.voicebox.demo.repository;

import com.appdevg5.voicebox.demo.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity, Integer> {}
