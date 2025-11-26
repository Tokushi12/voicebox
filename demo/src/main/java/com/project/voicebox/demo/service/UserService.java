package com.project.voicebox.demo.service;

import com.project.voicebox.demo.entity.UserEntity;
import com.project.voicebox.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository repo;

    public List<UserEntity> getAll() { return repo.findAll(); }

    public UserEntity getById(int id) { return repo.findById(id).orElse(null); }

    public UserEntity add(UserEntity user) { return repo.save(user); }

    public UserEntity update(int id, UserEntity user) {
        user.setUserId(id);
        return repo.save(user);
    }

    public void delete(int id) { repo.deleteById(id); }
}
