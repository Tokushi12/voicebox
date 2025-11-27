package com.appdevg5.voicebox.demo.repository;

import com.appdevg5.voicebox.demo.entity.VoteEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VoteRepository extends JpaRepository<VoteEntity, Integer> {}
