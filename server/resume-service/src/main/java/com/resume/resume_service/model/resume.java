package com.resume.resume_service.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "resumes")
public class resume {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    private String latex_code;
    private String template_img_url;
    private String downloadtemplatelink;
}
