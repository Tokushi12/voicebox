package com.project.voicebox.demo.repository;

import com.project.voicebox.demo.entity.FeedbackEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeedbackRepository extends JpaRepository<FeedbackEntity, Integer> {}
