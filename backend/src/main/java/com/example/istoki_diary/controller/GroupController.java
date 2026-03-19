package com.example.istoki_diary.controller;

import com.example.istoki_diary.dto.request.GroupCreationRequestDTO;
import com.example.istoki_diary.dto.response.GetGroupResponseDTO;
import com.example.istoki_diary.service.GroupService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/group")
@CrossOrigin(origins = "http://localhost:5173")
public class GroupController {
    private final GroupService groupService;

    public GroupController(GroupService groupService) {
        this.groupService = groupService;
    }

    @PostMapping("/create")
    public void createGroup(@RequestBody GroupCreationRequestDTO groupCreationRequestDTO) {
        groupService.createGroup(groupCreationRequestDTO);
    }

    @GetMapping("/all-groups")
    public List<GetGroupResponseDTO> getAllGroups() {
        return groupService.getAllGroups();
    }
}
