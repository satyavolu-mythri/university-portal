import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/attendance">Attendance</Link>
            <Link to="/assignment">Assignment</Link>
            <Link to="/student">Students</Link>

        </nav>
    );
}
export default Navbar;