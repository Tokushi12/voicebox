package com.appdevg5.voicebox.demo.entity;

import jakarta.persistence.*;

@Entity
public class VoteEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer voteId;

    private Integer userId;
    private Integer feedbackId;
    private String voteType;

    public VoteEntity() {}

    public VoteEntity(Integer voteId, Integer userId, Integer feedbackId, String voteType) {
        this.voteId = voteId;
        this.userId = userId;
        this.feedbackId = feedbackId;
        this.voteType = voteType;
    }

    public Integer getVoteId() {
        return voteId;
    }

    public void setVoteId(Integer voteId) {
        this.voteId = voteId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getFeedbackId() {
        return feedbackId;
    }

    public void setFeedbackId(Integer feedbackId) {
        this.feedbackId = feedbackId;
    }

    public String getVoteType() {
        return voteType;
    }

    public void setVoteType(String voteType) {
        this.voteType = voteType;
    }
}
