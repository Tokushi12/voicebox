package com.appdevg5.voicebox.demo.entity;

import jakarta.persistence.*;

@Entity
public class FeedbackEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer feedbackId;

    private Integer userId;
    private String title;
    private String feedbackDesc;
    private String category;  // Changed from int categoryId to String category
    private String author;    // Added author field
    private String status;
    private int upVotesCount;
    private int downVotesCount;

    public FeedbackEntity() {}

    public FeedbackEntity(Integer feedbackId, Integer userId, String title, String feedbackDesc, String category, String author, String status, int upVotesCount, int downVotesCount) {
        this.feedbackId = feedbackId;
        this.userId = userId;
        this.title = title;
        this.feedbackDesc = feedbackDesc;
        this.category = category;
        this.author = author;
        this.status = status;
        this.upVotesCount = upVotesCount;
        this.downVotesCount = downVotesCount;
    }

    public Integer getFeedbackId() {
        return feedbackId;
    }

    public void setFeedbackId(Integer feedbackId) {
        this.feedbackId = feedbackId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getFeedbackDesc() {
        return feedbackDesc;
    }

    public void setFeedbackDesc(String feedbackDesc) {
        this.feedbackDesc = feedbackDesc;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getUpVotesCount() {
        return upVotesCount;
    }

    public void setUpVotesCount(int upVotesCount) {
        this.upVotesCount = upVotesCount;
    }

    public int getDownVotesCount() {
        return downVotesCount;
    }

    public void setDownVotesCount(int downVotesCount) {
        this.downVotesCount = downVotesCount;
    }
}