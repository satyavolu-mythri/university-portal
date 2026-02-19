package com.university.universityPortal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.university.universityPortal.entity.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {
}
