package com.university.universityPortal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.university.universityPortal.entity.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {
}
