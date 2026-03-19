package com.example.istoki_diary.service;

import com.example.istoki_diary.dto.request.GroupCreationRequestDTO;
import com.example.istoki_diary.dto.response.GetGroupResponseDTO;
import com.example.istoki_diary.exception.CustomException;
import com.example.istoki_diary.model.GroupModel;
import com.example.istoki_diary.repository.GroupRepository;
import com.example.istoki_diary.repository.SessionRepository;
import com.example.istoki_diary.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class GroupService {
    private final SessionRepository sessionRepository;
    private final GroupRepository groupRepository;
    private final UserRepository userRepository;

    public GroupService(SessionRepository sessionRepository, GroupRepository groupRepository, UserRepository userRepository) {
        this.sessionRepository = sessionRepository;
        this.groupRepository = groupRepository;
        this.userRepository = userRepository;
    }

    public void createGroup(GroupCreationRequestDTO request) {
        if (request.getName() == null || request.getName().isEmpty())
            throw new CustomException("NAME_IS_NULL", "Session name cannot be null or empty");

        if (request.getSessionId() == null)
            throw new CustomException("SESSION_ID_IS_NULL", "Group's session id cannot be null or empty");

        if (request.getCuratorId() == null)
            throw new CustomException("CURATOR_ID_IS_NULL", "Group's curator id cannot be null or empty");

        if (groupRepository.existsByNameAndSessionId(request.getName(), request.getSessionId()))
            throw new CustomException("NAME_ALREADY_EXIST_IN_THIS_SESSION", "This name already exists in this session");

        if (!sessionRepository.existsById(request.getSessionId())) {
            throw new CustomException("SESSION_NOT_FOUND", "Session with this id not found");
        }

        if (!userRepository.existsById(request.getCuratorId())) {
            throw new CustomException("CURATOR_NOT_FOUND", "User with this id not found");
        }

        if (!userRepository.findRoleById(request.getCuratorId()).equals("CURATOR")) {
            throw new CustomException("USER_IS_NOT_CURATOR", "User with this id is not a curator");
        }

        GroupModel groupModel = new GroupModel();

        groupModel.setName(request.getName());
        groupModel.setSession(sessionRepository.findSessionModelById(request.getSessionId()));
        groupModel.setCurator(userRepository.findUserModelById(request.getCuratorId()));

        groupModel = groupRepository.save(groupModel);
    }

    public List<GetGroupResponseDTO> getAllGroups() {
        return groupRepository.findAll().stream()
                .map(group -> new GetGroupResponseDTO(
                        group.getName(),
                        group.getSession().getId(),
                        group.getCurator().getId()
                )).collect(Collectors.toList());
    }
}
