package com.appdevg5.voicebox.demo.service;

import com.appdevg5.voicebox.demo.entity.UserEntity;
import com.appdevg5.voicebox.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository repo;

    public List<UserEntity> getAll() { return repo.findAll(); }

    public UserEntity getById(Integer id) { return repo.findById(id).orElse(null); }  // Changed int to Integer

    public UserEntity add(UserEntity user) { 
        System.out.println("===== CREATING USER =====");
        System.out.println("First Name: " + user.getFirstName());
        System.out.println("Last Name: " + user.getLastName());
        System.out.println("ID Number: " + user.getIdNumber());
        System.out.println("User Type: " + user.getUserType());
        System.out.println("========================");
        return repo.save(user); 
    }

    public UserEntity update(Integer id, UserEntity user) {  // Changed int to Integer
        user.setUserId(id);
        return repo.save(user);
    }

    public void delete(Integer id) { repo.deleteById(id); }  // Changed int to Integer
}