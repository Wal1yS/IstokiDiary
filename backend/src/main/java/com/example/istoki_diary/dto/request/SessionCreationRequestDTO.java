package com.example.istoki_diary.dto.request;
import lombok.Data;
import lombok.AllArgsConstructor;
import java.time.LocalDate;

@Data
@AllArgsConstructor
public class SessionCreationRequestDTO {
    private String name;
    private LocalDate startDate;
    private LocalDate endDate;
    private String place;
    private String description;
}
