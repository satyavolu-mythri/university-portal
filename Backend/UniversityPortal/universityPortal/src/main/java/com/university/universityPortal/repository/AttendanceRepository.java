package com.university.universityPortal.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.university.universityPortal.entity.Attendance;

public interface AttendanceRepository extends JpaRepository<Attendance, Long> {
	
	List<Attendance> findByCourseIdAndDateBetween(
			Long courseId,
			LocalDate start,
			LocalDate end);

}
