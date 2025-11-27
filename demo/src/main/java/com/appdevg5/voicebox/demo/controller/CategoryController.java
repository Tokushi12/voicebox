package com.appdevg5.voicebox.demo.controller;

import com.appdevg5.voicebox.demo.entity.CategoryEntity;
import com.appdevg5.voicebox.demo.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categories")
@CrossOrigin(origins = "http://localhost:3306")
public class CategoryController {

    @Autowired
    private CategoryService service;

    @GetMapping
    public List<CategoryEntity> getAll() { return service.getAll(); }

    @GetMapping("/{id}")
    public CategoryEntity getOne(@PathVariable int id) { return service.getById(id); }

    @PostMapping
    public CategoryEntity create(@RequestBody CategoryEntity entity) { return service.add(entity); }

    @PutMapping("/{id}")
    public CategoryEntity update(@PathVariable int id, @RequestBody CategoryEntity entity) {
        return service.update(id, entity);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id) { service.delete(id); }
}
