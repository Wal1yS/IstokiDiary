package com.example.istoki_diary.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;

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
@Table(name = "diary")
@NoArgsConstructor
@AllArgsConstructor
public class DiaryModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "userid", nullable = false)
    private UserModel user;

    @ManyToOne
    @JoinColumn(name = "sessionid", nullable = true)
    private SessionModel session;

    private Long day;

    @ManyToOne
    @JoinColumn(name = "eventid", nullable = true)
    private EventModel event;

    private States state;
    private String comment;
    private LocalDate createdAt;
}