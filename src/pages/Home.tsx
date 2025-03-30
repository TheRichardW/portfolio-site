import { Link } from "@tanstack/react-router";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <p>
        I am Richard Winkelaar, a curious software enigneer from The
        Netherlands.
      </p>
      <Link to="/about-me">About Me</Link>
      <Link to="/projects">Projects</Link>
    </>
  );
}
