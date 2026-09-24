import { Link } from 'react-router-dom'
import './ProjectCard.css'

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-body">
        <h3>
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h3>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.tech.map((t, index) => (
            <span key={index} className='tag'>{t}</span>
          ))}
        </div>

        <div className="project-card-actions">
          <Link className='btn btn-primary' to={`/projects/${project.id}`}>View Project</Link>

          {project.githubUrl && (
            <a
              className="project-card-github"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.34-1.75-1.34-1.75-1.1-.75.08-.74.08-.74 1.21.09 1.85 1.25 1.85 1.25 1.08 1.84 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.53.12-3.18 0 0 1-.32 3.3 1.23a11.38 11.38 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard