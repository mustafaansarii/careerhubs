package com.resume.resume_service.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.DeleteMapping;

import com.resume.resume_service.service.resumeService;
import com.resume.resume_service.dto.resumeRequestDTO;
import org.springframework.http.ResponseEntity;
import java.util.Map;
import java.util.List;
import com.resume.resume_service.model.resume;
import com.resume.resume_service.model.userResume;

@RestController
@RequestMapping("/resume")
public class resumeController {
    
    private final resumeService resumeService;
    
    public resumeController(resumeService resumeService) {
        this.resumeService = resumeService;
    }
    
    @PostMapping("/add")
    public ResponseEntity<Map<String, String>> addResume(@RequestBody resumeRequestDTO resumeRequestDTO, @RequestHeader("Authorization") String token) {
        return resumeService.addResume(resumeRequestDTO, token);
    }
    
    @GetMapping("/all")
    public ResponseEntity<List<resume>> getAllResumes() {
        return resumeService.getAllResumes();
    }
    
    @PostMapping("/save/{resumeId}")
    public ResponseEntity<Map<String, String>> saveResume(@PathVariable Long resumeId, @RequestHeader("Authorization") String token) {
        return resumeService.saveUserResume(resumeId, token);
    }

    @GetMapping("/saved")
    public ResponseEntity<List<userResume>> getAllSavedResumes(@RequestHeader("Authorization") String token) {
        return resumeService.getAllSavedResumes(token);
    }
    
    @DeleteMapping("/delete/{resumeId}")
    public ResponseEntity<Map<String, String>> deleteUserResume(@PathVariable Long resumeId, @RequestHeader("Authorization") String token) {
        return resumeService.deleteUserResume(resumeId, token);
    }
    
    @PostMapping("/update/custom_code/{resumeId}")
    public ResponseEntity<Map<String, String>> updateUserResumeLatexCode(@PathVariable Long resumeId, @RequestHeader("Authorization") String token, @RequestBody Map<String, String> latexCode) {
        return resumeService.updateUserResumeLatexCode(resumeId, token, latexCode.get("updated"));
    }
}
