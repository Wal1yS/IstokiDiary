package com.example.istoki_diary.controller;

import com.example.istoki_diary.dto.request.AssignGroupRequestDTO;
import com.example.istoki_diary.dto.request.GetAllFromRequestDTO;
import com.example.istoki_diary.dto.request.MakeRoleRequestDTO;
import com.example.istoki_diary.dto.response.GetUserResponseDTO;
import com.example.istoki_diary.service.UserManipulationService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:5173")
public class UserManipulationController {
    private final UserManipulationService userService;

    public UserManipulationController(UserManipulationService userService) {
        this.userService = userService;
    }

    @PostMapping("/make-curator")
    public void makeCurator(@RequestBody MakeRoleRequestDTO request) {
        userService.makeCurator(request);
    }

    @PostMapping("/make-admin")
    public void makeAdmin(@RequestBody MakeRoleRequestDTO request) {
        userService.makeAdmin(request);
    }

    @PostMapping("/assign-group")
    public void assignGroup(@RequestBody AssignGroupRequestDTO request) {
        userService.assignGroup(request);
    }

    @GetMapping("/all")
    public List<GetUserResponseDTO> getAll() {
        return userService.getAll();
    }

    @PostMapping("/get-all-from-group")
    public List<GetUserResponseDTO> getAllFromGroup(@RequestBody GetAllFromRequestDTO request) {
        return userService.getAllFromGroup(request);
    }

    @PostMapping("/get-all-from-session")
    public List<GetUserResponseDTO> getAllFromSession(@RequestBody GetAllFromRequestDTO request) {
        return userService.getAllFromSession(request);
    }

    @PostMapping("/delete")
    public void delete(@RequestBody MakeRoleRequestDTO request) {
        userService.delete(request);
    }
}