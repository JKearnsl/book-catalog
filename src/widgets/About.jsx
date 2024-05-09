import "./about.css";

function About() {
    return (
      <div id="aboutDialog">
          <md-dialog>
              <div slot="headline">
                  О нас
              </div>
              <form slot="content" id="form-id" method="dialog">
                  <p>Разработано в рамках курсовой работы</p>
                  <p>Бояршинов Никита @JKearnsl 2024</p>
              </form>
              <div slot="actions">
                  <md-text-button form="form-id">
                      Ok
                  </md-text-button>
              </div>
          </md-dialog>
      </div>
    );
}

export default About;