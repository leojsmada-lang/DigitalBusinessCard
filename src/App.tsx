import "./App.css";
import Photo from "./Photo";

function App() {
  return (
    <main className="page">
      <section className="card">
        <header className="card-header">
          <div className="photo">
            <Photo />
          </div>
          <div className="meta">
            <h2>Joel Adams</h2>
            <p>Software Engineer</p>
          </div>
        </header>
        <div className="actions">
          <a
            href="mailto:joeladams@bellsouth.net"
            onClick={() =>
              (window.location.href = "mailto:joeladams@bellsouth.net")
            }
            className="action-link"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/leojsmada"
            target="_blank"
            rel="noreferrer"
            className="action-link"
          >
            LinkedIn
          </a>
        </div>
        <section className="content">
          <section className="about">
            <h3>About</h3>
            <p>
              I’m a C#/.NET developer who builds data-driven applications and
              improves engineering tools. I’ve worked on O-Calc enhancements,
              LiDAR modeling, and Azure DevOps pipelines, and I enjoy moving
              projects from design through testing and delivery.
            </p>
          </section>
          <section className="interests">
            <h3>Interests</h3>
            <p>
              Interests include web design, coding, and 30 plus years in music
              writing and production.
            </p>
          </section>
        </section>
        <footer className="card-footer">{/* icons */}</footer>
      </section>
    </main>
  );
}

export default App;
