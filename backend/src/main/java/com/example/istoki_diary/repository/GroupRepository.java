package com.example.istoki_diary.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.istoki_diary.model.GroupModel;

@Repository
public interface GroupRepository extends JpaRepository<GroupModel, Long> {
    boolean existsByNameAndSessionId(String name, Long sessionId);
    GroupModel findGroupModelById(Long id);
}
