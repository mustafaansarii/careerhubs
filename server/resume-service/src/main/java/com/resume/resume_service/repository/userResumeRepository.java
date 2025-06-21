package com.resume.resume_service.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.resume.resume_service.model.userResume;

public interface userResumeRepository extends JpaRepository<userResume, Long> {
    List<userResume> findByUserId(String userId);
    List<userResume> findByUserIdAndResumeId(String userId, String resumeId);
}
