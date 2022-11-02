import imgKSS from "../../images/code.jpg";
import imgCollegeBowlGames from "../../images/FaurotField.jpg";
import imgEvRoute from "../../images/evRoute.jpg";
import imgPowderBound from "../../images/powder-bound.jpg";

export default function Portfolio() {
  return (
    <div class="sections">
      <section id="Portfolio">
        <h2>Portfolio</h2>
        <div class="articles">
          <article>
            <header>
              <h3>
                <a
                  href="https://www.kellysoftware.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  Kelly Software Solutions
                </a>
              </h3>
            </header>
            <a
              href="https://www.kellysoftware.org"
              target="_blank"
              rel="noreferrer"
            >
              <img src={imgKSS} alt="Code" />
            </a>
            <p>
              A collection of coding projects in various languages and
              technologies.
            </p>
          </article>

          <article>
            <header>
              <h3>
                <a
                  href="https://bowlgames.kellysoftware.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  College Bowl Games
                </a>
              </h3>
            </header>
            <a
              href="https://bowlgames.kellysoftware.org"
              target="_blank"
              rel="noreferrer"
            >
              <img src={imgCollegeBowlGames} alt="Football Game" />
            </a>
            <p>
              A free Pick'em-style college football site. This site was
              originally written in 2007.
            </p>
            <p>Microsoft ASP.NET, C#, & SQL Server</p>
          </article>

          <article>
            <header>
              <h3>
                <a
                  href="https://dpk5e7-evroute.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  evRoute
                </a>
              </h3>
            </header>
            <a
              href="https://dpk5e7-evroute.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={imgEvRoute} alt="evRoute" />
            </a>
            <p>
              Project #2 for the University of Denver Coding Bootcamp 2022. The
              purpose of this challenge was to build an application to assist
              Electric Vehicle owners in planning long distance trips.
            </p>
            <p>
              Alternative Fuel Data Center information, Mapbox, Node.js,
              Express.js, MySQL, Sequelize, SASS, Handlebars.js, &
              express-session
            </p>
          </article>

          <article>
            <header>
              <h3>
                <a
                  href="https://dpk5e7.github.io/powder-bound/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Powder Bound
                </a>
              </h3>
            </header>
            <a
              href="https://dpk5e7.github.io/powder-bound/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={imgPowderBound} alt="Powder Bound" />
            </a>
            <p>
              Project #1 for the University of Denver Coding Bootcamp 2022. The
              purpose of this project was to build an application to assist snow
              sport enthusiasts in Colorado in planning their search for powder.
            </p>
            <p>
              HTML, CSS, Moment.js v2.27.0, jQuery v3.6.0, Bulma v0.9.4, &
              Leaflet v1.8.0
            </p>
            <p>
              Powderlin.es, Open Weather, Google Static Maps, MapQuest
              Directions, MapQuest GeoCoding & Reverse Geocoding, MapQuest
              Static Maps, MapQuest Search Ahead, Geolocation
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
