package com.resume.resume_service.model;

import lombok.Data;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Data
@Entity
public class userResume {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String custom_code;
    private String template_img_url;
    private String downloadtemplatelink;
    private String userId;
    private String resumeId;
}
