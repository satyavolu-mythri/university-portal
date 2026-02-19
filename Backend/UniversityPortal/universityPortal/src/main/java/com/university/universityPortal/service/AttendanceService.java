package com.university.universityPortal.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.university.universityPortal.entity.Attendance;
import com.university.universityPortal.repository.AttendanceRepository;

@Service
public class AttendanceService {
	
	@Autowired
	private AttendanceRepository repository;
	
	public Attendance saveAttendance(Attendance attendance) {
		return repository.save(attendance);
	}
	
	public List<Attendance> getAttendanceReport(
			Long courseId, LocalDate start, LocalDate end){
		return repository.findByCourseIdAndDateBetween(courseId, start, end);
	}

}
