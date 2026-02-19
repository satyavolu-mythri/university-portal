// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Attendance from './components/Attendance';
import Assignment from './components/Assignment';
import Navbar from './components/Navbar';
import Students from './pages/Student'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/assignment" element={<Assignment />} />
        <Route path="/student" element={<Students />} />

      </Routes>
    </Router>
  );
}

export default App;
