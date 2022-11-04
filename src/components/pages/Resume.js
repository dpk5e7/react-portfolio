export default function Resume() {
  
  const resumeLink = <a href={process.env.PUBLIC_URL + "/downloads/Kelly_Resume_2022.pdf"} alt="Resume" download>resume</a>;

  return (
    <div class="sections">
      <section id="Contact">
        <h2>Resume</h2>
        <p>Download my {resumeLink}.</p>
        <p>
          <h3>Front-End Proficiencies:</h3>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>React</li>
            <li>Leaflet, MapBox</li>
            <li>Bootstrap, SASS</li>
            <li>RESTful APIs</li>
          </ul>
        </p>
        <p>
          <h3>Back-End Proficiencies:</h3>
          <ul>
            <li>C#</li>
            <li>ASP.NET</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MS SQL, MySQL, MongoDB</li>
            <li>Sequelize, Mongoose</li>
          </ul>
        </p>
      </section>
    </div>
  );
}
