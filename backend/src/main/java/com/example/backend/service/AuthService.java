package com.example.backend.service;

import com.example.backend.dto.LogingRequest;

public interface AuthService {
    String login(LogingRequest request);
}
