package com.example.istoki_diary.dto.response;
import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserResponseDTO {
    private String status;
    private String name;
    private String surname;
    private String patronymic;
    private String role;
    private String email;
    private String number;
}