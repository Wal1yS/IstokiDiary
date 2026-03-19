package com.example.istoki_diary.dto.response;
import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GetSessionResponseDTO {
    private String name;
    private LocalDate startDate;
    private LocalDate endDate;
    private String place;
    private String description;
}
