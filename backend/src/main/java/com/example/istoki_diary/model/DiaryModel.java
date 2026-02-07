package com.example.istoki_diary.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

enum States {
    APATHY,
    PASSIVITY,
    RELAXATION,
    BALANCE,
    ENGAGEMENT,
    OVERSTIMULATION,
    PANIC
}



@Data
@Entity
@Table(name = "diaries")
@NoArgsConstructor
@AllArgsConstructor
public class DiaryModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "userId", nullable = false)
    private UserModel user;

    @ManyToOne
    @JoinColumn(name = "sessionId", nullable = true)
    private SessionModel session;

    private Long day;

    @ManyToOne
    @JoinColumn(name = "eventId", nullable = true)
    private EventModel event;

    private States state;
    private String comment;
    private String createdAt;
}