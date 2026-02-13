package com.example.istoki_diary.dto.request;
import lombok.Data;
import lombok.AllArgsConstructor;

@Data
@AllArgsConstructor
public class RegistrationRequestDTO {
    private String name;
    private String surname;
    private String patronymic;
    private String password;
    private String email;
    private String number;
}
