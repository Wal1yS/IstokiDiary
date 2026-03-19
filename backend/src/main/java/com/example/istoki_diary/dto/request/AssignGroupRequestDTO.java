package com.example.istoki_diary.dto.request;
import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AssignGroupRequestDTO {
    private Long userId;
    private Long groupId;
}
