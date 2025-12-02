package com.appdevg5.voicebox.demo.service;

import com.appdevg5.voicebox.demo.entity.CategoryEntity;
import com.appdevg5.voicebox.demo.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository repo;

    public List<CategoryEntity> getAll() { return repo.findAll(); }

    public CategoryEntity getById(Integer id) { return repo.findById(id).orElse(null); }

    public CategoryEntity add(CategoryEntity c) { return repo.save(c); }

    public CategoryEntity update(Integer id, CategoryEntity c) {
        c.setCategoryId(id);
        return repo.save(c);
    }

    public void delete(Integer id) { repo.deleteById(id); }
}
