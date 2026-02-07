package com.example.istoki_diary.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "events", uniqueConstraints = {
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
    @JoinColumn(name = "sessionId", nullable = true)
    private SessionModel session;
    private Long day;
    private String startTime;
    private String endTime;
    private String type;
    private String description;
    private String tags;
}

