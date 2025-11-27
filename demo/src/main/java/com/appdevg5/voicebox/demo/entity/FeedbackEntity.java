package com.appdevg5.voicebox.demo.entity;

import jakarta.persistence.*;

@Entity
public class FeedbackEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int feedbackId;

    private int userId;
    private String title;
    private String feedbackDesc;
    private int categoryId;
    private String status;
    private int upVotesCount;
    private int downVotesCount;

    public FeedbackEntity() {}

    public FeedbackEntity(int feedbackId, int userId, String title, String feedbackDesc, int categoryId, String status, int upVotesCount, int downVotesCount) {
        this.feedbackId = feedbackId;
        this.userId = userId;
        this.title = title;
        this.feedbackDesc = feedbackDesc;
        this.categoryId = categoryId;
        this.status = status;
        this.upVotesCount = upVotesCount;
        this.downVotesCount = downVotesCount;
    }

    public int getFeedbackId() {
        return feedbackId;
    }

    public void setFeedbackId(int feedbackId) {
        this.feedbackId = feedbackId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
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

    public int getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(int categoryId) {
        this.categoryId = categoryId;
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
