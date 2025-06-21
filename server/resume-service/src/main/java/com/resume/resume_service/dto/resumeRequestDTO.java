package com.resume.resume_service.dto;

import lombok.Data;

@Data
public class resumeRequestDTO {
    private String name;
    private String latex_code;
    private String template_img_url;
    private String downloadtemplatelink;
}
