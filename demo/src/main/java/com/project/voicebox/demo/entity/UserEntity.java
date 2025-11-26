package com.project.voicebox.demo.entity;

import jakarta.persistence.*;

@Entity
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userId;

    private String firstName;
    private String lastName;
    private String idNumber;
    private String userType;
    private String userPassword;

    public UserEntity() {}

    public UserEntity(int userId, String firstName, String lastName, String idNumber, String userType, String userPassword) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = idNumber;
        this.userType = userType;
        this.userPassword = userPassword;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getIdNumber() {
        return idNumber;
    }

    public void setIdNumber(String idNumber) {
        this.idNumber = idNumber;
    }

    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }
}
