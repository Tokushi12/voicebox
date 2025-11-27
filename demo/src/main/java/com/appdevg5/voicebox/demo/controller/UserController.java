package com.appdevg5.voicebox.demo.controller;

import com.appdevg5.voicebox.demo.entity.UserEntity;
import com.appdevg5.voicebox.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3306")
public class UserController {

    @Autowired
    private UserService service;

    @GetMapping
    public List<UserEntity> getAll() { return service.getAll(); }

    @GetMapping("/{id}")
    public UserEntity getOne(@PathVariable int id) { return service.getById(id); }

    @PostMapping
    public UserEntity create(@RequestBody UserEntity entity) { return service.add(entity); }

    @PutMapping("/{id}")
    public UserEntity update(@PathVariable int id, @RequestBody UserEntity entity) {
        return service.update(id, entity);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id) { service.delete(id); }
}
