package com.example.istoki_diary.dto.request;
import lombok.Data;
import lombok.AllArgsConstructor;

@Data
@AllArgsConstructor
public class UserRequestDTO {
    private String name;
    private String surname;
    private String patronymic;
    private String email;
    private String number;
}
