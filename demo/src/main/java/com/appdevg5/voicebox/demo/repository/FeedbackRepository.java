package com.appdevg5.voicebox.demo.repository;

import com.appdevg5.voicebox.demo.entity.FeedbackEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeedbackRepository extends JpaRepository<FeedbackEntity, Integer> {}
