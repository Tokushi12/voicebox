package com.appdevg5.voicebox.demo.controller;

import com.appdevg5.voicebox.demo.entity.FeedbackEntity;
import com.appdevg5.voicebox.demo.service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/feedback")
@CrossOrigin(origins = "http://localhost:3000")
public class FeedbackController {

    @Autowired
    private FeedbackService service;

    @GetMapping
    public List<FeedbackEntity> getAll() { return service.getAll(); }

    @GetMapping("/{id}")
    public FeedbackEntity getOne(@PathVariable Integer id) { return service.getById(id); }

    @PostMapping
    public FeedbackEntity create(@RequestBody FeedbackEntity entity) { return service.add(entity); }

    @PutMapping("/{id}")
    public FeedbackEntity update(@PathVariable Integer id, @RequestBody FeedbackEntity entity) {
        return service.update(id, entity);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) { service.delete(id); }
}
