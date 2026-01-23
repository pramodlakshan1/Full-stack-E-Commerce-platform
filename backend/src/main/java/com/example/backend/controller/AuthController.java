package com.example.backend.controller;

import com.example.backend.dto.JwtResponse;
import com.example.backend.service.AuthService;
import com.example.backend.dto.LogingRequest;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public JwtResponse login(@RequestBody LogingRequest request) {
        String token = authService.login(request);
        return new JwtResponse(token);
    }
}
