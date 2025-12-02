package com.appdevg5.voicebox.demo.controller;

import com.appdevg5.voicebox.demo.entity.TagEntity;
import com.appdevg5.voicebox.demo.service.TagService;
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
    public TagEntity getOne(@PathVariable Integer id) { return service.getById(id); }

    @PostMapping
    public TagEntity create(@RequestBody TagEntity entity) { return service.add(entity); }

    @PutMapping("/{id}")
    public TagEntity update(@PathVariable Integer id, @RequestBody TagEntity entity) {
        return service.update(id, entity);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) { service.delete(id); }
}
