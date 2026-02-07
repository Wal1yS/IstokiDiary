package com.example.istoki_diary.dto.request;
import lombok.Data;
import lombok.AllArgsConstructor;

@Data
@AllArgsConstructor
public class UserCreationRequestDTO {
    private String name;
    private String surname;
    private String role;
    private String email;
    private String number;
    private Long groupId;
    private Long sessionId;
}
