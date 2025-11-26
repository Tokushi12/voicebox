package com.project.voicebox.demo.repository;

import com.project.voicebox.demo.entity.TagEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TagRepository extends JpaRepository<TagEntity, Integer> {}
