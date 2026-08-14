import React from "react";
import styles from "./Projects.module.css";
import Card3D from "../Common/Card3D";
import { getImageUrl } from "../../utils";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Projects = () => {
  const projectsData = [
    {
      title: "Aether - AI Spatial Design Tool",
      description:
        "A generative design canvas allowing architects and designers to create interactive 3D spatial models in real-time using natural language text prompts.",
      tags: ["React", "Three.js", "Node.js", "OpenAI API"],
      image: getImageUrl("project_aether.png"),
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      title: "Nova - Holographic E-Commerce",
      description:
        "An immersive virtual store interface offering high-fidelity interactive product customizers, customized lighting setups, and automated checkout pipelines.",
      tags: ["React", "Three.js", "CSS Modules", "Stripe API"],
      image: getImageUrl("project_nova.png"),
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      title: "Aura - AI Calm Assistant",
      description:
        "Real-time biosignal-responsive soundscape generator and emotional support system promoting meditation through interactive visual feedback.",
      tags: ["React", "Web Audio API", "Python", "FastAPI"],
      image: getImageUrl("project_aura.png"),
      github: "https://github.com",
      live: "https://example.com",
    },
  ];

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.eyebrow}>Portfolio</div>
          <h2 className={styles.title}>
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className={styles.subtitle}>
            Explore some of my recent applications. Hover over the cards to interact with their 3D perspective models.
          </p>
        </div>

        <div className={styles.grid}>
          {projectsData.map((project, idx) => (
            <Card3D key={idx} className={styles.projectCard} maxTilt={12}>
              <div className={styles.cardImageWrapper}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardInfo}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>
                
                <div className={styles.tagsContainer}>
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className={styles.tagBadge}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={styles.actionsRow}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.actionBtn}
                  >
                    <FiGithub size={18} /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.actionBtnPrimary}
                  >
                    Demo <FiExternalLink size={16} />
                  </a>
                </div>
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
