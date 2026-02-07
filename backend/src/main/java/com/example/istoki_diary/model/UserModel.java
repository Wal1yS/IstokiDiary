package com.example.istoki_diary.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "users")
@NoArgsConstructor
@AllArgsConstructor
public class UserModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String role;
    private String surname;
    @Column(nullable = false, unique = true)
    private String email;
    @Column(nullable = false, unique = true)
    private String number;

    @ManyToOne
    @JoinColumn(name = "groupId", nullable = true)
    private GroupModel group;

    @ManyToOne
    @JoinColumn(name = "sessionId", nullable = true)
    private SessionModel session;
}
