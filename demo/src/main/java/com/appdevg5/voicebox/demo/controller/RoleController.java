package com.appdevg5.voicebox.demo.controller;

import com.appdevg5.voicebox.demo.entity.RoleEntity;
import com.appdevg5.voicebox.demo.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/roles")
@CrossOrigin(origins = "http://localhost:3000")
public class RoleController {

    @Autowired
    private RoleService service;

    @GetMapping
    public List<RoleEntity> getAll() { return service.getAll(); }

    @GetMapping("/{id}")
    public RoleEntity getOne(@PathVariable Integer id) { return service.getById(id); }

    @PostMapping
    public RoleEntity create(@RequestBody RoleEntity entity) { return service.add(entity); }

    @PutMapping("/{id}")
    public RoleEntity update(@PathVariable Integer id, @RequestBody RoleEntity entity) {
        return service.update(id, entity);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) { service.delete(id); }
}
