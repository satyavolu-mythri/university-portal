package com.university.universityPortal.controller;

import java.io.IOException;
import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.university.universityPortal.entity.Attendance;
import com.university.universityPortal.service.AIService;
import com.university.universityPortal.service.AttendanceService;

@RestController
@RequestMapping("/api/attendance")
@CrossOrigin
public class AttendanceController {
	@Autowired
	private AttendanceService service;
	private AIService aiService;
	
	@PostMapping
    public Attendance markAttendance(
            @RequestBody Attendance attendance) {
        return service.saveAttendance(attendance);
    }

    @GetMapping("/report")
    public List<Attendance> getReport(
            @RequestParam Long courseId,
            @RequestParam String start,
            @RequestParam String end) {

        return service.getAttendanceReport(
            courseId,
            LocalDate.parse(start),
            LocalDate.parse(end));
    }
    
    @PostMapping("/upload")
    public String uploadAssignment(
            @RequestParam("file") MultipartFile file)
            throws IOException {

        String content = new String(file.getBytes());

        // Call AI here
        String feedback = aiService.evaluate(content);

        return feedback;
    }
    

}
