package com.example.istoki_diary.service;

import com.example.istoki_diary.dto.request.AssignGroupRequestDTO;
import com.example.istoki_diary.dto.request.GetAllFromRequestDTO;
import com.example.istoki_diary.dto.request.MakeRoleRequestDTO;
import com.example.istoki_diary.dto.response.GetUserResponseDTO;
import com.example.istoki_diary.exception.CustomException;
import com.example.istoki_diary.model.GroupModel;
import com.example.istoki_diary.model.UserModel;
import com.example.istoki_diary.model.SessionModel;
import com.example.istoki_diary.repository.GroupRepository;
import com.example.istoki_diary.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserManipulationService {
    private UserRepository userRepository;
    private GroupRepository groupRepository;

    public UserManipulationService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void makeCurator(MakeRoleRequestDTO request) {
        if (request.getId() == null)
            throw new CustomException("USER_ID_IS_NULL", "User id cannot be null");
        if (!userRepository.existsById(request.getId()))
            throw new CustomException("USER_NOT_FOUND", "User with this id not found");

        UserModel user = userRepository.findUserModelById(request.getId());
        user.setRole("CURATOR");
        userRepository.save(user);
    }

    public void makeAdmin(MakeRoleRequestDTO request) {
        if (request.getId() == null)
            throw new CustomException("USER_ID_IS_NULL", "User id cannot be null");
        if (!userRepository.existsById(request.getId()))
            throw new CustomException("USER_NOT_FOUND", "User with this id not found");

        UserModel user = userRepository.findUserModelById(request.getId());
        user.setRole("ADMIN");
        userRepository.save(user);
    }

    public List<GetUserResponseDTO> getAll() {
        return userRepository.findAll().stream()
                .map(user -> new GetUserResponseDTO(
                        user.getName(),
                        user.getSurname(),
                        user.getPatronymic(),
                        user.getRole(),
                        user.getEmail(),
                        user.getNumber()
                )).collect(Collectors.toList());

    }

    public List<GetUserResponseDTO> getAllFromGroup(GetAllFromRequestDTO request) {
        return userRepository.findAllByGroupId(request.getId()).stream()
                .map(user -> new GetUserResponseDTO(
                        user.getName(),
                        user.getSurname(),
                        user.getPatronymic(),
                        user.getRole(),
                        user.getEmail(),
                        user.getNumber()
                )).collect(Collectors.toList());
    }

    public List<GetUserResponseDTO> getAllFromSession(GetAllFromRequestDTO request) {
        return userRepository.findAllBySessionId(request.getId()).stream()
                .map(user -> new GetUserResponseDTO(
                        user.getName(),
                        user.getSurname(),
                        user.getPatronymic(),
                        user.getRole(),
                        user.getEmail(),
                        user.getNumber()
                )).collect(Collectors.toList());
    }

    public void assignGroup(AssignGroupRequestDTO request) {
        if (request.getUserId() == null)
            throw new CustomException("USER_ID_IS_NULL", "User id cannot be null");
        if (request.getGroupId() == null)
            throw new CustomException("GROUP_ID_IS_NULL", "Group id cannot be null");
        if (!userRepository.existsById(request.getUserId()))
            throw new CustomException("USER_NOT_FOUND", "User with this id not found");
        if (!groupRepository.existsById(request.getGroupId()))
            throw new CustomException("GROUP_NOT_FOUND", "Group with this id not found");
        UserModel user = userRepository.findUserModelById(request.getUserId());
        GroupModel group = groupRepository.findGroupModelById(request.getGroupId());
        SessionModel session = group.getSession();
        user.setGroup(group);
        user.setSession(session);
        userRepository.save(user);
    }

    public void delete(MakeRoleRequestDTO request) {
        if (request.getId() == null)
            throw new CustomException("USER_ID_IS_NULL", "User id cannot be null");
        if (!userRepository.existsById(request.getId()))
            throw new CustomException("USER_NOT_FOUND", "User with this id not found");

        userRepository.deleteById(request.getId());
    }
}
