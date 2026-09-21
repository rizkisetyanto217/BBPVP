import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex gap-6 px-6 py-4 border-b">
      <Link to="/" className="text-sm font-medium hover:underline">
        Home
      </Link>
      <Link to="/students" className="text-sm font-medium hover:underline">
        Students
      </Link>
      <Link to="/majors" className="text-sm font-medium hover:underline">
        Majors
      </Link>
    </nav>
  );
}
