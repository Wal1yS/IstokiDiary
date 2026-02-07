package com.example.istoki_diary.dto.response;
import lombok.Data;
import lombok.AllArgsConstructor;

@Data
@AllArgsConstructor
public class UserCreationResponseDTO {
    private String name;
    private String surname;
    private String role;
    private String email;
    private String number;
    private Long groupId;
    private Long sessionId;
}