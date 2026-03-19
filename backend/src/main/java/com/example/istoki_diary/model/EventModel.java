package com.example.istoki_diary.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;

@Data
@Entity
@Table(name = "event", uniqueConstraints = {
    @UniqueConstraint(columnNames = {"name", "sessionId"})
})
@NoArgsConstructor
@AllArgsConstructor
public class EventModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    @ManyToOne
    @JoinColumn(name = "sessionid")
    private SessionModel session;
    private Long day;
    private LocalDate startTime;
    private LocalDate endTime;
    private String type;
    private String description;
    private String tags;
}

