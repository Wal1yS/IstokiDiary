package com.example.istoki_diary.service;
import com.example.istoki_diary.dto.request.RegistrationRequestDTO;
import com.example.istoki_diary.dto.response.RegistrationResponseDTO;
import com.example.istoki_diary.exception.CustomException;
import com.example.istoki_diary.model.UserModel;
import com.example.istoki_diary.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class RegistrationService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public RegistrationService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public RegistrationResponseDTO registerUser(RegistrationRequestDTO request) {
        if (request.getName() == null || request.getName().isEmpty())
            throw new CustomException("NAME_IS_NULL","User name cannot be null or empty");

        if (request.getSurname() == null || request.getSurname().isEmpty())
            throw new CustomException("SURNAME_IS_NULL","User surname cannot be null or empty");

        if (request.getPatronymic() == null || request.getPatronymic().isEmpty())
            throw new CustomException("PATRONYMIC_IS_NULL","User patronymic cannot be null or empty");

        if  (request.getEmail() == null || request.getEmail().isEmpty())
            throw new CustomException("EMAIL_IS_NULL","User email cannot be null or empty");

        if  (request.getNumber() == null || request.getNumber().isEmpty())
            throw new CustomException("NUMBER_IS_NULL","User number cannot be null or empty");

        if  (request.getPassword() == null || request.getPassword().isEmpty())
            throw new CustomException("PASSWORD_IS_NULL","User password cannot be null or empty");

        if (userRepository.existsByEmail(request.getEmail()))
            throw new CustomException("EMAIL_ALREADY_REGISTERED","Email already exists");

        if (userRepository.existsByNumber(request.getNumber()))
            throw new CustomException("NUMBER_ALREADY_REGISTERED","Number already exists");

        UserModel userModel = new UserModel();

        userModel.setName(request.getName());
        userModel.setSurname(request.getSurname());
        userModel.setPatronymic(request.getPatronymic());
        userModel.setPassword(passwordEncoder.encode(request.getPassword()));
        userModel.setEmail(request.getEmail());
        userModel.setNumber(request.getNumber());
        userModel.setRole("USER");

        userModel = userRepository.save(userModel);

        RegistrationResponseDTO responseDTO = new RegistrationResponseDTO();
        responseDTO.setStatus("REGISTERED");
        responseDTO.setName(userModel.getName());
        responseDTO.setSurname(userModel.getSurname());
        responseDTO.setPatronymic(userModel.getPatronymic());
        responseDTO.setEmail(userModel.getEmail());
        responseDTO.setNumber(userModel.getNumber());
        responseDTO.setRole(userModel.getRole());

        return responseDTO;
    }
}
