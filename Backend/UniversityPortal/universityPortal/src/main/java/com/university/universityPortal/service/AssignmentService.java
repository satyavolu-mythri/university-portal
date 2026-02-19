package com.university.universityPortal.service;


import java.io.IOException;
import java.net.URI;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.university.universityPortal.entity.Assignment;
import com.university.universityPortal.repository.AssignmentRepository;
@Service
public class AssignmentService {

//	private static final URI UPLOAD_DIR = null;
	private static final String UPLOAD_DIR = "uploads/";
	@Autowired
    private AssignmentRepository repository;

//    public Assignment saveAssignment(Assignment assignment) {
//        return repository.save(assignment);
//    }
	
	public Assignment saveAssignment(
            Long studentId,
            Long courseId,
            String title,
            String description,
            MultipartFile file) throws IOException {

        // Create uploads folder if not exists
		Path uploadPath = Paths.get(UPLOAD_DIR);
        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        // Generate unique file name
        String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
        Path filePath = uploadPath.resolve(fileName);

        // Save file
        Files.write(filePath, file.getBytes());

        // Save to database
        Assignment assignment = new Assignment();
        assignment.setStudentId(studentId);
        assignment.setCourseId(courseId);
        assignment.setTitle(title);
        assignment.setDescription(description);
        assignment.setFileName(fileName);
        assignment.setSubmittedAt(LocalDateTime.now());

        return repository.save(assignment);
    }

}
