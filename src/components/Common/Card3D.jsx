import React, { useRef, useState } from "react";
import styles from "./Card3D.module.css";

const Card3D = ({ children, maxTilt = 15, className = "" }) => {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [tiltStyle, setTiltStyle] = useState({});

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    
    // Mouse position relative to the element
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalized position from -0.5 to 0.5
    const px = x / rect.width - 0.5;
    const py = y / rect.height - 0.5;
    
    // Calculate tilt
    const tiltX = -py * maxTilt;
    const tiltY = px * maxTilt;
    
    setCoords({ x, y });
    setTiltStyle({
      transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTiltStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    });
  };

  return (
    <div
      ref={cardRef}
      className={`${styles.cardWrapper} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={tiltStyle}
    >
      <div className={styles.cardContent}>
        {children}
      </div>
      
      {isHovered && (
        <div
          className={styles.glare}
          style={{
            background: `radial-gradient(circle at ${coords.x}px ${coords.y}px, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 60%)`,
          }}
        />
      )}
    </div>
  );
};

export default Card3D;
