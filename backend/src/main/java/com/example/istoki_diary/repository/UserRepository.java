package com.example.istoki_diary.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.example.istoki_diary.model.UserModel;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<UserModel, Long> {
    boolean existsById(Long id);
    boolean existsByEmail(String email);
    boolean existsByNumber(String number);
    UserModel findByEmail(String email);
    @Query("SELECT u.role FROM UserModel u WHERE u.id = :id")
    String findRoleById(Long id);
    UserModel findUserModelById(Long id);
    List<UserModel> findAllByGroupId(Long groupId);
    List<UserModel> findAllBySessionId(Long sessionId);
    void deleteById(Long id);
}
