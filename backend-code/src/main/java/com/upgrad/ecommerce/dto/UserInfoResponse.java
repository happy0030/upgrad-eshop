package com.upgrad.ecommerce.dto;

import lombok.Data;

import java.util.List;

@Data
public class UserInfoResponse {
    private String id;
    private String username;
    private String email;
    private List<String> roles;
    private String token;

    public UserInfoResponse(String id, String username, String email, List<String> roles, String token) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.roles = roles;
        this.token = token;
    }
}
