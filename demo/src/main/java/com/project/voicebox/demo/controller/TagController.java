package com.project.voicebox.demo.controller;

import com.project.voicebox.demo.entity.TagEntity;
import com.project.voicebox.demo.service.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tags")
@CrossOrigin(origins = "http://localhost:3000")
public class TagController {

    @Autowired
    private TagService service;

    @GetMapping
    public List<TagEntity> getAll() { return service.getAll(); }

    @GetMapping("/{id}")
    public TagEntity getOne(@PathVariable int id) { return service.getById(id); }

    @PostMapping
    public TagEntity create(@RequestBody TagEntity entity) { return service.add(entity); }

    @PutMapping("/{id}")
    public TagEntity update(@PathVariable int id, @RequestBody TagEntity entity) {
        return service.update(id, entity);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id) { service.delete(id); }
}
