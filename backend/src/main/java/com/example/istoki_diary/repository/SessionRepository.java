package com.example.istoki_diary.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.istoki_diary.model.SessionModel;
import org.yaml.snakeyaml.events.Event;

import java.util.Optional;

@Repository
public interface SessionRepository extends JpaRepository<SessionModel, Long> {
        boolean existsByName(String name);
        boolean existsById(Long id);
        SessionModel findSessionModelById(Long id);
}
