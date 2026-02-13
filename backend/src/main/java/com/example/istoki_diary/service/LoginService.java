package com.example.istoki_diary.service;

import com.example.istoki_diary.dto.request.LoginRequestDTO;
import com.example.istoki_diary.dto.response.LoginResponseDTO;
import com.example.istoki_diary.exception.CustomException;
import com.example.istoki_diary.model.UserModel;
import com.example.istoki_diary.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

@Service
public class LoginService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public LoginService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public LoginResponseDTO loginUser(@RequestBody LoginRequestDTO request) {
        if (request.getEmail() == null || request.getEmail().isEmpty()) throw new CustomException("EMAIL_IS_NULL", "User email cannot be null or empty");
        if (request.getPassword() == null || request.getPassword().isEmpty()) throw new CustomException("PASSWORD_IS_NULL", "User password cannot be null or empty");

        UserModel foundUser = userRepository.findByEmail(request.getEmail());

        if (foundUser == null) {
            throw new CustomException("USER_NOT_FOUND", "User not found");
        }

        if (!(passwordEncoder.matches(request.getPassword(), foundUser.getPassword()))) throw new CustomException("INVALID_PASSWORD", "Invalid password");

        LoginResponseDTO responseDTO = new LoginResponseDTO();
        responseDTO.setStatus("LOGGED_IN");
        responseDTO.setName(foundUser.getName());
        responseDTO.setSurname(foundUser.getSurname());
        responseDTO.setPatronymic(foundUser.getPatronymic());
        responseDTO.setEmail(foundUser.getEmail());
        responseDTO.setNumber(foundUser.getNumber());
        responseDTO.setRole(foundUser.getRole());

        return responseDTO;

    }
}
