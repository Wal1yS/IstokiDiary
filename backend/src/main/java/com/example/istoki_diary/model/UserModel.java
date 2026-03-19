package com.example.istoki_diary.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "user")
@NoArgsConstructor
@AllArgsConstructor
public class UserModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String surname;
    private String patronymic;
    private String password;
    private String role;
    private String email;
    private String number;

    @ManyToOne
    @JoinColumn(name = "groupid", nullable = true)
    private GroupModel group;
    @ManyToOne
    @JoinColumn(name = "sessionid", nullable = true)
    private SessionModel session;
}
