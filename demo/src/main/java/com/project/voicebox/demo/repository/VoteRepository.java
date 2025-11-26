package com.project.voicebox.demo.repository;

import com.project.voicebox.demo.entity.VoteEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VoteRepository extends JpaRepository<VoteEntity, Integer> {}
