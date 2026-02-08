package com.example.istoki_diary.controller;
import com.example.istoki_diary.dto.request.UserRequestDTO;
import com.example.istoki_diary.dto.response.UserResponseDTO;
import org.springframework.web.bind.annotation.*;
import com.example.istoki_diary.service.UserService;
import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public UserResponseDTO registerUser(@RequestBody UserRequestDTO user) {
        return userService.registerUser(user);
    }

    @GetMapping
    public List<UserResponseDTO> getUsers() {
        return userService.getAllUsers();
    }
}
