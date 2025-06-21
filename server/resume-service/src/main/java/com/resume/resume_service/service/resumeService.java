package com.resume.resume_service.service;

import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.resume.resume_service.dto.resumeRequestDTO;
import com.resume.resume_service.repository.resumeRepository;
import com.resume.resume_service.model.resume;
import com.resume.resume_service.repository.userResumeRepository;
import com.resume.resume_service.model.userResume;

import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;
import java.util.Optional;

@Service
public class resumeService {        
    private final AuthService authService; 
    private final resumeRepository resumeRepository;
    private final userResumeRepository userResumeRepository;
    
    public resumeService(AuthService authService, resumeRepository resumeRepository, userResumeRepository userResumeRepository) {
        this.authService = authService;
        this.resumeRepository = resumeRepository;
        this.userResumeRepository = userResumeRepository;
    }
    
    public ResponseEntity<Map<String, String>> addResume(resumeRequestDTO resumeRequestDTO, String token) { 
        String email = authService.extractEmailFromToken(token);
        if (!email.equals("royinfo29@gmail.com")) {
            return ResponseEntity.badRequest().body(Map.of("error", "Unauthorized"));
        }
        
        resume resume = new resume();
        resume.setName(resumeRequestDTO.getName());
        resume.setLatex_code(resumeRequestDTO.getLatex_code());
        resume.setTemplate_img_url(resumeRequestDTO.getTemplate_img_url());
        resume.setDownloadtemplatelink(resumeRequestDTO.getDownloadtemplatelink());
        
        resumeRepository.save(resume);
        return ResponseEntity.ok(Map.of("message", "Resume added successfully"));
    }
    
    public ResponseEntity<List<resume>> getAllResumes() {
        List<resume> resumes = resumeRepository.findAll();
        if (resumes.isEmpty()) {
            return ResponseEntity.ok(resumes);
        }
        return ResponseEntity.ok(resumes);
    }
    
    public ResponseEntity<Map<String, String>> saveUserResume(Long resumeId, String token) {
        String email = authService.extractEmailFromToken(token);
        
        resume globalResume = resumeRepository.findById(resumeId)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Resume not found"));
        
        List<userResume> savedResumes = userResumeRepository.findByUserIdAndResumeId(email, resumeId.toString());
        if (savedResumes.isEmpty()) {
            userResume savedResume = new userResume();
            savedResume.setName(globalResume.getName());
            savedResume.setCustom_code(globalResume.getLatex_code());
            savedResume.setTemplate_img_url(globalResume.getTemplate_img_url());
            savedResume.setDownloadtemplatelink(globalResume.getDownloadtemplatelink());
            savedResume.setUserId(email);
            savedResume.setResumeId(resumeId.toString());
            
            userResumeRepository.save(savedResume);
            return ResponseEntity.ok(Map.of("message", "Resume saved successfully"));
        }
        return ResponseEntity.ok(Map.of("message", "Resume already saved"));
    }
    
    public ResponseEntity<List<userResume>> getAllSavedResumes(String token) {
        String email = authService.extractEmailFromToken(token);
        List<userResume> savedResumes = userResumeRepository.findByUserId(email);
        return ResponseEntity.ok(savedResumes);
    }

    public ResponseEntity<Map<String, String>> deleteUserResume(Long resumeId, String token) {
        String email = authService.extractEmailFromToken(token);
        List<userResume> savedResumes = userResumeRepository.findByUserIdAndResumeId(email, resumeId.toString());
        if (savedResumes.isEmpty()) {
            return ResponseEntity.badRequest().body(Map.of("error", "Resume not found"));
        }
        userResumeRepository.delete(savedResumes.get(0));
        return ResponseEntity.ok(Map.of("message", "Resume deleted successfully"));
    }
    public ResponseEntity<Map<String, String>> updateUserResumeLatexCode(Long resumeId, String token, String latexCode) {
        String email = authService.extractEmailFromToken(token);
        List<userResume> savedResumes = userResumeRepository.findByUserIdAndResumeId(email, resumeId.toString());
        if (savedResumes.isEmpty()) {
            return ResponseEntity.badRequest().body(Map.of("error", "Resume not found"));
        }
        savedResumes.get(0).setCustom_code(latexCode);
        userResumeRepository.save(savedResumes.get(0));
        return ResponseEntity.ok(Map.of("message", "Resume latex code updated successfully"));
    }
}
