package com.appdevg5.voicebox.demo.service;

import com.appdevg5.voicebox.demo.entity.FeedbackEntity;
import com.appdevg5.voicebox.demo.repository.FeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FeedbackService {

    @Autowired
    private FeedbackRepository repo;

    public List<FeedbackEntity> getAll() { return repo.findAll(); }

    public FeedbackEntity getById(int id) { return repo.findById(id).orElse(null); }

    public FeedbackEntity add(FeedbackEntity f) { return repo.save(f); }

    public FeedbackEntity update(int id, FeedbackEntity f) {
        f.setFeedbackId(id);
        return repo.save(f);
    }

    public void delete(int id) { repo.deleteById(id); }
}
