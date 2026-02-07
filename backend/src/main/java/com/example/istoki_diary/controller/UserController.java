package com.example.istoki_diary.controller;
import com.example.istoki_diary.model.UserModel;
import org.springframework.web.bind.annotation.*;
import com.example.istoki_diary.service.UserService;
import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public UserModel createUser(@RequestBody UserModel user) {
        return userService.createUser(user);
    }

    @GetMapping
    public List<UserModel> getUsers() {
        return userService.getAllUsers();
    }
}
