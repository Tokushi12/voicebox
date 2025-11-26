package com.project.voicebox.demo.entity;

import jakarta.persistence.*;

@Entity
public class TagEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int tagId;

    private String name;
    private String description;

    public TagEntity() {}

    public TagEntity(int tagId, String name, String description) {
        this.tagId = tagId;
        this.name = name;
        this.description = description;
    }

    public int getTagId() {
        return tagId;
    }

    public void setTagId(int tagId) {
        this.tagId = tagId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
