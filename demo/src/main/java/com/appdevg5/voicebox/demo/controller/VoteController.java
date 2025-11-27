package com.appdevg5.voicebox.demo.controller;

import com.appdevg5.voicebox.demo.entity.VoteEntity;
import com.appdevg5.voicebox.demo.service.VoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/votes")
@CrossOrigin(origins = "http://localhost:3306")
public class VoteController {

    @Autowired
    private VoteService service;

    @GetMapping
    public List<VoteEntity> getAll() { return service.getAll(); }

    @GetMapping("/{id}")
    public VoteEntity getOne(@PathVariable int id) { return service.getById(id); }

    @PostMapping
    public VoteEntity create(@RequestBody VoteEntity entity) { return service.add(entity); }

    @PutMapping("/{id}")
    public VoteEntity update(@PathVariable int id, @RequestBody VoteEntity entity) {
        return service.update(id, entity);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id) { service.delete(id); }
}
