import svgGitHub from "../images/github.svg";

export default function Project(props) {
  const title = props.title;

  const link = props.url ? (
    <a href={props.url} target="_blank" rel="noreferrer">
      {title}
    </a>
  ) : (
    ""
  );

  const imgLink =
    props.url && props.image ? (
      <a href={props.url} target="_blank" rel="noreferrer">
        <img src={props.image} alt={title} />
      </a>
    ) : (
      ""
    );

  const description = props.description ? <p>{props.description}</p> : "";

  const technologies = props.technologies ? (
    <p>Technologies: {props.technologies}</p>
  ) : (
    ""
  );

  const GitHubRepoLink = props.GitHubRepo ? (
    <p>
      {
        <a href={props.GitHubRepo} target="_blank" rel="noreferrer">
          <img src={svgGitHub} alt="GitHub" />
        </a>
      }
    </p>
  ) : (
    ""
  );

  return (
    <article key={title}>
      <header>
        <h3>{link}</h3>
        {GitHubRepoLink}
      </header>
      {imgLink}
      {description}
      {technologies}
    </article>
  );
}
