package com.example.istoki_diary.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.istoki_diary.model.SessionModel;

@Repository
public interface SessionRepository extends JpaRepository<SessionModel, Long> {
}
