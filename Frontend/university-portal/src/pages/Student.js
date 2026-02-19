import React, { useEffect, useState } from "react";

function Students() {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [activeStudentId, setActiveStudentId] = useState(null);

  useEffect(() => {
    fetchStudents();
    fetchCourses();
  }, []);

  const fetchStudents = async () => {
    const res = await fetch("http://localhost:8080/api/students");
    const data = await res.json();
    setStudents(data);
  };

  const fetchCourses = async () => {
    const res = await fetch("http://localhost:8080/api/courses");
    const data = await res.json();
    setCourses(data);
  };

  const enrollStudent = async (studentId, courseId) => {
    await fetch(
      `http://localhost:8080/api/students/${studentId}/enroll/${courseId}`,
      { method: "PUT" }
    );

    fetchStudents(); // refresh data after enrolling
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Students</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Enrolled Courses</th>
            <th>Enroll</th>
          </tr>
        </thead>

        <tbody>
          {students.map(student => (
            <React.Fragment key={student.id}>
              <tr>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.department}</td>

                <td>
                  {student.courses && student.courses.length > 0 ? (
                    student.courses.map(course => (
                      <div key={course.id}>
                        {course.title}
                      </div>
                    ))
                  ) : (
                    "None"
                  )}
                </td>

                <td>
                  <button
                    onClick={() =>
                      setActiveStudentId(
                        activeStudentId === student.id ? null : student.id
                      )
                    }
                  >
                    Enroll Course
                  </button>
                </td>
              </tr>

              {activeStudentId === student.id && (
                <tr>
                  <td colSpan="6">
                    <div>
                      {courses.map(course => (
                        <button
                          key={course.id}
                          onClick={() =>
                            enrollStudent(student.id, course.id)
                          }
                          style={{ marginRight: "10px" }}
                        >
                          {course.title}
                        </button>
                      ))}
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Students;
