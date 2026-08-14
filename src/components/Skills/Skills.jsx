import React from "react";
import styles from "./Skills.module.css";
import { FiCode, FiServer, FiLayers } from "react-icons/fi";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Engineering",
      icon: <FiCode size={22} />,
      skills: [
        { name: "React / React Native", level: 95 },
        { name: "JavaScript / TypeScript", level: 90 },
        { name: "HTML5 / CSS3 / Sass", level: 95 },
        { name: "Next.js / Gatsby", level: 85 },
      ],
    },
    {
      title: "Backend Development",
      icon: <FiServer size={22} />,
      skills: [
        { name: "Node.js / Express", level: 88 },
        { name: "MongoDB / Mongoose", level: 85 },
        { name: "REST / GraphQL APIs", level: 90 },
        { name: "PostgreSQL / SQL", level: 80 },
      ],
    },
    {
      title: "Design & Frameworks",
      icon: <FiLayers size={22} />,
      skills: [
        { name: "UI/UX & Figma Design", level: 85 },
        { name: "Git & Version Control", level: 92 },
        { name: "TailwindCSS & CSS Modules", level: 95 },
        { name: "Docker & Cloud Deployments", level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.eyebrow}>Capabilities</div>
          <h2 className={styles.title}>
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className={styles.subtitle}>
            A curated summary of my technical competencies and developer environments.
          </p>
        </div>

        <div className={styles.grid}>
          {skillCategories.map((category, idx) => (
            <div key={idx} className={styles.categoryCard}>
              <div className={styles.categoryHeader}>
                <div className={styles.iconWrapper}>{category.icon}</div>
                <h3>{category.title}</h3>
              </div>
              <div className={styles.skillList}>
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className={styles.skillItem}>
                    <div className={styles.skillMeta}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillPercent}>{skill.level}%</span>
                    </div>
                    <div className={styles.progressContainer}>
                      <div
                        className={styles.progressBar}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
