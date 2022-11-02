import React from "react";

export default function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav>
      <ul>
        <li>
          <a href="#about" onClick={() => handlePageChange("Home")}>
            About Me
          </a>
        </li>
        <li>
          <a href="#portfolio" onClick={() => handlePageChange("Portfolio")}>
            Portfolio
          </a>
        </li>
        <li>
          <a href="#resume" onClick={() => handlePageChange("Resume")}>
            Resume
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => handlePageChange("Contact")}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
