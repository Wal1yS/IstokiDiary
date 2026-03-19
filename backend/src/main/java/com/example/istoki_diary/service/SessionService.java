package com.example.istoki_diary.service;

import com.example.istoki_diary.dto.request.SessionCreationRequestDTO;
import com.example.istoki_diary.dto.response.GetSessionResponseDTO;
import com.example.istoki_diary.exception.CustomException;
import com.example.istoki_diary.model.SessionModel;
import com.example.istoki_diary.repository.SessionRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class SessionService {
    private final SessionRepository sessionRepository;

    public SessionService(SessionRepository sessionRepository) {
        this.sessionRepository = sessionRepository;
    }

    public void createSession(SessionCreationRequestDTO request) {
        if (request.getName() == null || request.getName().isEmpty())
            throw new CustomException("NAME_IS_NULL","Session name cannot be null or empty");

        if (request.getStartDate() == null)
            throw new CustomException("START_DATE_IS_NULL","Session startDate cannot be null or empty");

        if (request.getEndDate() == null)
            throw new CustomException("END_DATE_IS_NULL","Session endDate cannot be null or empty");

        if  (request.getPlace() == null || request.getPlace().isEmpty())
            throw new CustomException("PLACE_IS_NULL","Session place cannot be null or empty");

        if (sessionRepository.existsByName(request.getName()))
            throw new CustomException("NAME_ALREADY_EXIST","This name already exists");


        SessionModel sessionModel = new SessionModel();

        sessionModel.setName(request.getName());
        sessionModel.setStartDate(request.getStartDate());
        sessionModel.setEndDate(request.getEndDate());
        sessionModel.setPlace(request.getPlace());
        sessionModel.setDescription(request.getDescription());

        sessionModel = sessionRepository.save(sessionModel);
    }

    public List<GetSessionResponseDTO> getAllSessions() {
        return sessionRepository.findAll().stream()
                .map(session -> new GetSessionResponseDTO(
                        session.getName(),
                        session.getStartDate(),
                        session.getEndDate(),
                        session.getPlace(),
                        session.getDescription()
                )).collect(Collectors.toList());
    }
}
