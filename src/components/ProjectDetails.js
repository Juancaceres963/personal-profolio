import { useParams } from "react-router-dom";
import { projects } from "./projectsData"; // ✅ Importamos la lista de proyectos
import UnderConstructionModal from "../components/UnderConstructionModal";
import "../styles/projectDetails.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export const ProjectDetails = () => {
  const { id } = useParams(); // Obtener el ID desde la URL
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <h2>Proyecto no encontrado</h2>;
  }

  return (
    <div className="project-details">
      <div className="project-details-text">
        <UnderConstructionModal />
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <h3>Tecnologías utilizadas:</h3>
        <ul>
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        <h3>Habilidades Aplicadas:</h3>
        <p>{project.skills}</p>
      </div>

      <div id="carouselExampleCaptions" data-bs-interval="false" data-bs-ride="carousel" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="projects-details-img d-block w-100"
              src={project.imgUrl4}
              alt={project.title}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="projects-details-img d-block w-100"
              src={project.imgUrl2}
              alt={project.title}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="projects-details-img d-block w-100"
              src={project.imgUrl3}
              alt={project.title}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
