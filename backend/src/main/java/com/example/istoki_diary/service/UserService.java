package com.example.istoki_diary.service;
import com.example.istoki_diary.dto.request.UserRequestDTO;
import com.example.istoki_diary.dto.response.UserResponseDTO;
import com.example.istoki_diary.exception.CustomException;
import com.example.istoki_diary.model.UserModel;
import com.example.istoki_diary.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<UserResponseDTO> getAllUsers() {
        return userRepository.findAll().stream().map(user -> {return new UserResponseDTO(
                user.getId(),
                "active",
                user.getName(),
                user.getSurname(),
                user.getPatronymic(),
                user.getRole(),
                user.getEmail(),
                user.getNumber()
                );}).toList();
    }

    public UserResponseDTO registerUser(UserRequestDTO user) {
        if (user.getName() == null || user.getName().isEmpty()) {
            throw new CustomException("NAME_IS_NULL","User name cannot be null or empty");
        }
        if (user.getSurname() == null || user.getSurname().isEmpty()) {
            throw new CustomException("SURNAME_IS_NULL","User surname cannot be null or empty");
        }
        if (user.getPatronymic() == null || user.getPatronymic().isEmpty()) {
            throw new CustomException("PATRONYMIC_IS_NULL","User patronymic cannot be null or empty");
        }
        if  (user.getEmail() == null || user.getEmail().isEmpty()) {
            throw new CustomException("EMAIL_IS_NULL","User email cannot be null or empty");
        }
        if  (user.getNumber() == null || user.getNumber().isEmpty()) {
            throw new CustomException("NUMBER_IS_NULL","User number cannot be null or empty");
        }
        if (userRepository.existsByEmail(user.getEmail())) throw new CustomException("EMAIL_ALREADY_REGISTERED","Email already exists");

        if (userRepository.existsByNumber(user.getNumber())) throw new CustomException("NUMBER_ALREADY_REGISTERED","Number already exists");

        UserModel userModel = new UserModel();

        userModel.setName(user.getName());
        userModel.setSurname(user.getSurname());
        userModel.setPatronymic(user.getPatronymic());
        userModel.setEmail(user.getEmail());
        userModel.setNumber(user.getNumber());
        userModel.setRole("participant");

        userModel = userRepository.save(userModel);

        UserResponseDTO responseDTO = new UserResponseDTO();
        responseDTO.setId(userModel.getId());
        responseDTO.setStatus("registered");
        responseDTO.setName(userModel.getName());
        responseDTO.setSurname(userModel.getSurname());
        responseDTO.setPatronymic(userModel.getPatronymic());
        responseDTO.setEmail(userModel.getEmail());
        responseDTO.setNumber(userModel.getNumber());
        responseDTO.setRole(userModel.getRole());

        return responseDTO;
    }
}
