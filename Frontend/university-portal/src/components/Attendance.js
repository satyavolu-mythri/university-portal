import axios from "axios";
import { useState } from "react";

function Attendance() {

  const [studentId, setStudentId] = useState("");
  const [courseId, setCourseId] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("PRESENT");

  const submitAttendance = async () => {
    await axios.post("http://localhost:8080/api/attendance", {
      studentId,
      courseId,
      date,
      status
    });
    alert("Attendance Saved");
  };

  return (
    <div>
      <h2>Mark Attendance</h2>

      <input placeholder="Student ID"
             onChange={e => setStudentId(e.target.value)} />

      <input placeholder="Course ID"
             onChange={e => setCourseId(e.target.value)} />

      <input type="date"
             onChange={e => setDate(e.target.value)} />

      <select onChange={e => setStatus(e.target.value)}>
        <option>Present</option>
        <option>Absent</option>
      </select>

      <button onClick={submitAttendance}>
        Submit
      </button>
    </div>
  );
}

export default Attendance;