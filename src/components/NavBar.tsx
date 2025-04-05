import { Link } from "@tanstack/react-router";

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/">Home</Link>
      </div>
      <div className="right">
        <Link to="/about-me">About Me</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </div>
  );
}
