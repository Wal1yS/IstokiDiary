package com.example.istoki_diary.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;


@Data
@Entity
@Table(name = "users_reflection")
@NoArgsConstructor
@AllArgsConstructor
public class ReflectionModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "userid", nullable = false)
    private UserModel user;
    @ManyToOne
    @JoinColumn(name = "sessionid", nullable = false)
    private SessionModel session;
    private Long day;
    private String answer1;
    private String answer2;
    private String answer3;
    private String text;
    private LocalDate createdAt;
}