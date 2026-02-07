package com.example.istoki_diary.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.istoki_diary.model.ReflectionModel;

@Repository
public interface ReflectionRepository extends JpaRepository<ReflectionModel, Long> {
}