package com.example.istoki_diary.controller;
import com.example.istoki_diary.dto.request.RegistrationRequestDTO;
import com.example.istoki_diary.dto.response.RegistrationResponseDTO;
import org.springframework.web.bind.annotation.*;
import com.example.istoki_diary.service.RegistrationService;

@RestController
@RequestMapping("/reg")
public class RegistrationController {
    private final RegistrationService registrationService;

    public RegistrationController(RegistrationService userService) {
        this.registrationService = userService;
    }

    @PostMapping
    public RegistrationResponseDTO registerUser(@RequestBody RegistrationRequestDTO user) {
        return registrationService.registerUser(user);
    }

}
