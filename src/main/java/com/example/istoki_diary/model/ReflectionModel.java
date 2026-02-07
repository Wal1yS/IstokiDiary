package com.example.istoki_diary.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "users_reflections")
@NoArgsConstructor
@AllArgsConstructor
public class ReflectionModel {
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
    private String answer1;
    private String answer2;
    private String answer3;
    private String text;
}