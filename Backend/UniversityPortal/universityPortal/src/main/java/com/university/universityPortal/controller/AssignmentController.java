package com.university.universityPortal.controller;


import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.university.universityPortal.entity.Assignment;
import com.university.universityPortal.service.AssignmentService;

@RestController
@RequestMapping("/api/assignments")
@CrossOrigin(origins = "http://localhost:3000")
public class AssignmentController {

    @Autowired
    private AssignmentService service;

//    @PostMapping
//    public Assignment saveAssignment(@RequestBody Assignment assignment) {
//        System.out.println("Assignment received: " + assignment);
//        return service.saveAssignment(assignment);
//    }
    
    @PostMapping("/submit")
    public Assignment submitAssignment(
            @RequestParam Long studentId,
            @RequestParam Long courseId,
            @RequestParam String title,
            @RequestParam String description,
            @RequestParam MultipartFile file
    ) throws IOException {

        return service.saveAssignment(studentId, courseId, title, description, file);
    }
}
