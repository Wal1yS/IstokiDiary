package com.example.istoki_diary.controller;

import com.example.istoki_diary.dto.request.LoginRequestDTO;
import com.example.istoki_diary.dto.response.LoginResponseDTO;
import com.example.istoki_diary.service.LoginService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class LoginController {
    private final LoginService loginService;

    public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }

    @PostMapping
    public LoginResponseDTO loginUse(@RequestBody LoginRequestDTO loginRequestDTO) {
        return loginService.loginUser(loginRequestDTO);
    }
}
