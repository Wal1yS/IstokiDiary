package com.example.istoki_diary.dto.response;
import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GetGroupResponseDTO {
    private String name;
    private Long sessionId;
    private Long curatorId;
}
