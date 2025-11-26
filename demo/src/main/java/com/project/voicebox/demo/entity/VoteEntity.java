package com.project.voicebox.demo.entity;

import jakarta.persistence.*;

@Entity
public class VoteEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int voteId;

    private int userId;
    private int feedbackId;
    private String voteType;

    public VoteEntity() {}

    public VoteEntity(int voteId, int userId, int feedbackId, String voteType) {
        this.voteId = voteId;
        this.userId = userId;
        this.feedbackId = feedbackId;
        this.voteType = voteType;
    }

    public int getVoteId() {
        return voteId;
    }

    public void setVoteId(int voteId) {
        this.voteId = voteId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getFeedbackId() {
        return feedbackId;
    }

    public void setFeedbackId(int feedbackId) {
        this.feedbackId = feedbackId;
    }

    public String getVoteType() {
        return voteType;
    }

    public void setVoteType(String voteType) {
        this.voteType = voteType;
    }
}
