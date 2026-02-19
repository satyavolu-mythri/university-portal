// import React, { useState } from "react";
// import axios from "axios";

// function Assignment() {

//   const [studentId, setStudentId] = useState("");
//   const [courseId, setCourseId] = useState("");
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         "http://localhost:8080/api/assignments",
//         {
//           studentId: Number(studentId),
//           courseId: Number(courseId),
//           title: title,
//           content: content
//         }
//       );

//       console.log("Assignment Saved:", response.data);
//       alert("Assignment submitted successfully!");

//       // Clear form
//       setStudentId("");
//       setCourseId("");
//       setTitle("");
//       setContent("");

//     } catch (error) {
//       console.error("Error submitting assignment:", error);
//       alert("Error submitting assignment. Check backend.");
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Submit Assignment</h2>

//       <form onSubmit={handleSubmit}>

//         <div>
//           <label>Student ID:</label><br />
//           <input
//             type="number"
//             value={studentId}
//             onChange={(e) => setStudentId(e.target.value)}
//             required
//           />
//         </div>

//         <div>
//           <label>Course ID:</label><br />
//           <input
//             type="number"
//             value={courseId}
//             onChange={(e) => setCourseId(e.target.value)}
//             required
//           />
//         </div>

//         <div>
//           <label>Assignment Title:</label><br />
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//         </div>

//         <div>
//           <label>Content:</label><br />
//           <textarea
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             rows="5"
//             cols="40"
//             required
//           />
//         </div>

//         <br />

//         <button type="submit">Submit Assignment</button>

//       </form>
//     </div>
//   );
// }

// export default Assignment;


import React, { useState } from "react";
import axios from "axios";

function Assignment() {
  const [studentId, setStudentId] = useState("");
  const [courseId, setCourseId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("studentId", studentId);
    formData.append("courseId", courseId);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("file", file);

    try {
      await axios.post("http://localhost:8080/api/assignments/submit", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Assignment submitted successfully!");
    } catch (error) {
      console.error(error);
      alert("Submission failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" placeholder="Student ID"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)} required />

      <input type="number" placeholder="Course ID"
        value={courseId}
        onChange={(e) => setCourseId(e.target.value)} required />

      <input type="text" placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)} required />

      <textarea placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)} required />

      <input type="file"
        accept="application/pdf"
        onChange={(e) => setFile(e.target.files[0])}
        required />

      <button type="submit">Submit Assignment</button>
    </form>
  );
}

export default Assignment;
