package com.example.istoki_diary.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "group", uniqueConstraints = {
        @UniqueConstraint(columnNames = {"name", "sessionId"})
})
@NoArgsConstructor
@AllArgsConstructor
public class GroupModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @ManyToOne
    @JoinColumn(name = "sessionid", nullable = true)
    private SessionModel session;

    @OneToOne
    @JoinColumn(name = "curatorid", nullable = true)
    private UserModel curator;
}