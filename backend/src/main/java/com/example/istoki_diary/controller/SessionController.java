package com.example.istoki_diary.controller;

import com.example.istoki_diary.dto.request.SessionCreationRequestDTO;
import com.example.istoki_diary.dto.response.GetSessionResponseDTO;
import com.example.istoki_diary.service.SessionService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/session")
@CrossOrigin(origins = "http://localhost:5173")
public class SessionController {
    private final SessionService sessionService;

    public SessionController(SessionService sessionService) {
        this.sessionService = sessionService;
    }

    @PostMapping("/create")
    public void createSession(@RequestBody SessionCreationRequestDTO sessionCreationRequestDTO) {
        sessionService.createSession(sessionCreationRequestDTO);
    }

    @GetMapping("/all-sessions")
    public List<GetSessionResponseDTO> getAllSessions() {
        return sessionService.getAllSessions();
    }
}
