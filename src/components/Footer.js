import svgGitHub from "../images/github.svg";
import svgLinkedIn from "../images/linkedin.svg";
import svgStackOverflow from "../images/stack-overflow.svg";

export default function Footer() {
  return (
    <footer>
      <h4>
        &copy; 2022&nbsp;
        <a
          href="https://www.kellysoftware.org"
          target="_blank"
          rel="noreferrer"
        >
          Kelly Software Solutions
        </a>
      </h4>
      <div class="socialMedia">
        <a href="https://github.com/dpk5e7/" target="_blank" rel="noreferrer">
          <img src={svgGitHub} alt="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/dpk5e7/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={svgLinkedIn} alt="LinkedIn" />
        </a>
        <a
          href="https://stackoverflow.com/users/18925866/dan-kelly"
          target="_blank"
          rel="noreferrer"
        >
          <img src={svgStackOverflow} alt="Stack Overflow" />
        </a>
      </div>
    </footer>
  );
}
