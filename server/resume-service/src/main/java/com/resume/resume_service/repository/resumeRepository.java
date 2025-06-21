package com.resume.resume_service.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.resume.resume_service.model.resume;

public interface resumeRepository extends JpaRepository<resume, Long> {
    
}
