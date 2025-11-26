package com.project.voicebox.demo.repository;

import com.project.voicebox.demo.entity.CategoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<CategoryEntity, Integer> {}
