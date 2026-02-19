package com.university.universityPortal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.university.universityPortal.entity.Course;
import com.university.universityPortal.entity.Student;
import com.university.universityPortal.repository.CourseRepository;
import com.university.universityPortal.service.StudentService;

@RestController
@RequestMapping("/api/students")
@CrossOrigin(origins = "http://localhost:3000")

public class StudentController {

    @Autowired
    private StudentService service;

    @PostMapping
    public Student createStudent(@RequestBody Student student) {
        return service.saveStudent(student);
    }

    @GetMapping
    public List<Student> getAllStudents() {
        return service.getAllStudents();
    }
    
    
    @PutMapping("/{studentId}/enroll/{courseId}")
    public Student enrollStudent(
            @PathVariable Long studentId,
            @PathVariable Long courseId
    ) {
        return service.enrollStudent(studentId, courseId);
    }

   

    

    
}
