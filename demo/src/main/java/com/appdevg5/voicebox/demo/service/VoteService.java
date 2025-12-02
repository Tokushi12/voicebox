package com.appdevg5.voicebox.demo.service;

import com.appdevg5.voicebox.demo.entity.VoteEntity;
import com.appdevg5.voicebox.demo.repository.VoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VoteService {

    @Autowired
    private VoteRepository repo;

    public List<VoteEntity> getAll() { return repo.findAll(); }

    public VoteEntity getById(Integer id) { return repo.findById(id).orElse(null); }

    public VoteEntity add(VoteEntity v) { return repo.save(v); }

    public VoteEntity update(Integer id, VoteEntity v) {
        v.setVoteId(id);
        return repo.save(v);
    }

    public void delete(Integer id) { repo.deleteById(id); }
}
