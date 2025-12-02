package com.appdevg5.voicebox.demo.service;

import com.appdevg5.voicebox.demo.entity.TagEntity;
import com.appdevg5.voicebox.demo.repository.TagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TagService {

    @Autowired
    private TagRepository repo;

    public List<TagEntity> getAll() { return repo.findAll(); }

    public TagEntity getById(Integer id) { return repo.findById(id).orElse(null); }

    public TagEntity add(TagEntity t) { return repo.save(t); }

    public TagEntity update(Integer id, TagEntity t) {
        t.setTagId(id);
        return repo.save(t);
    }

    public void delete(Integer id) { repo.deleteById(id); }
}
