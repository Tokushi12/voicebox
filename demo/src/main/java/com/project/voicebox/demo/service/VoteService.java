package com.project.voicebox.demo.service;

import com.project.voicebox.demo.entity.VoteEntity;
import com.project.voicebox.demo.repository.VoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VoteService {

    @Autowired
    private VoteRepository repo;

    public List<VoteEntity> getAll() { return repo.findAll(); }

    public VoteEntity getById(int id) { return repo.findById(id).orElse(null); }

    public VoteEntity add(VoteEntity v) { return repo.save(v); }

    public VoteEntity update(int id, VoteEntity v) {
        v.setVoteId(id);
        return repo.save(v);
    }

    public void delete(int id) { repo.deleteById(id); }
}
