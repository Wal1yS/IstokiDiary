package com.example.istoki_diary.dto.request;
import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GroupCreationRequestDTO {
    private String name;
    private Long sessionId;
    private Long curatorId;
}
