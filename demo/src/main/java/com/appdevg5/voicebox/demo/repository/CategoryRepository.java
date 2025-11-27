package com.appdevg5.voicebox.demo.repository;

import com.appdevg5.voicebox.demo.entity.CategoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<CategoryEntity, Integer> {}
