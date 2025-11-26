package com.project.voicebox.demo.service;

import com.project.voicebox.demo.entity.RoleEntity;
import com.project.voicebox.demo.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleService {

    @Autowired
    private RoleRepository repo;

    public List<RoleEntity> getAll() { return repo.findAll(); }

    public RoleEntity getById(int id) { return repo.findById(id).orElse(null); }

    public RoleEntity add(RoleEntity r) { return repo.save(r); }

    public RoleEntity update(int id, RoleEntity r) {
        r.setRoleId(id);
        return repo.save(r);
    }

    public void delete(int id) { repo.deleteById(id); }
}
