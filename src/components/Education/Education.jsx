import React from "react";
import styles from "./Education.module.css";
import { FiBookOpen, FiAward, FiCompass } from "react-icons/fi";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology in Mechanical Engineering",
      institution: "Madan Mohan Malaviya Univerity of technology",
      period: "2023 - 2027",
      description:
        "Specialized in Advanced Web Infrastructures, Software Architecture, and Distributed Database Systems. Researched high-performance rendering engines and visual interaction systems.",
      icon: <FiBookOpen size={20} />,
      grade: "CGPA : 7.9/10",
    },
    {
      degree: "Intermediate (CBSE)",
      institution: "St. Xavier's Inter College",
      period: "2021 - 2022",
      
      icon: <FiAward size={20} />,
      grade: "Grade : 83.4%",
    },
    {
      degree: "High School (CBSE)",
      institution: "St. Xavier's Inter College",
      period: "2019 - 2020",
      
      icon: <FiCompass size={20} />,
      grade: "Grade : 93.2%",
    },
  ];

  return (
    <section id="education" className={styles.educationSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.eyebrow}>My Journey</div>
          <h2 className={styles.title}>
            Educational <span className="text-gradient">Milestones</span>
          </h2>
          <p className={styles.subtitle}>
            A timeline of my formal academic qualifications and technical training backgrounds.
          </p>
        </div>

        <div className={styles.timeline}>
          {educationData.map((edu, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineBadge}>
                {edu.icon}
              </div>
              <div className={styles.timelineContent}>
                <span className={styles.period}>{edu.period}</span>
                <h3 className={styles.degree}>{edu.degree}</h3>
                <h4 className={styles.institution}>{edu.institution}</h4>
                <p className={styles.description}>{edu.description}</p>
                <div className={styles.gradeBadge}>{edu.grade}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
