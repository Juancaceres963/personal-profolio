import { Col } from "react-bootstrap";
import { Link } from "react-router-dom"; // Importar Link para la navegación

export const ProjectCard = ({ id, title, description, imgUrl }) => {
  return (
    <Col sm={6} md={4}>
      <Link to={`/project/${id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </Link>
    </Col>
  );
};