package com.appdevg5.voicebox.demo.entity;

import jakarta.persistence.*;

@Entity
public class TagEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer tagId;

    private String name;
    private String description;

    public TagEntity() {}

    public TagEntity(Integer tagId, String name, String description) {
        this.tagId = tagId;
        this.name = name;
        this.description = description;
    }

    public Integer getTagId() {
        return tagId;
    }

    public void setTagId(Integer tagId) {
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
