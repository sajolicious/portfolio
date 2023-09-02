import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

// Navbar Component
export const Navbar = () => {
    const [hoveredIcon, setHoveredIcon] = useState(null);
    const handleClick = (link) => window.open(link, '_blank');

    const iconStyle = (icon) => ({
        margin: '0 10px',
        cursor: 'pointer',
        transform: hoveredIcon === icon ? 'scale(1.1)' : 'scale(1)',
        color: hoveredIcon === icon ? '#FFD700' : '#ff22df',
        transition: 'transform 0.3s, color 0.3s'
    });
  
    return (
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          padding: '10px 20px',
          borderRadius: '8px',
          position: 'absolute',
          top: '10px',
          right: '100px',
          zIndex: 10,
        }}
      >
        <FontAwesomeIcon
          icon={faGithub}
          size="2x"
          style={iconStyle('github')}
          onClick={() => handleClick('https://github.com/sajolicious')}
          onMouseEnter={() => setHoveredIcon('github')}
          onMouseLeave={() => setHoveredIcon(null)}
          title="GitHub Profile"
        />
        <FontAwesomeIcon
          icon={faLinkedin}
          size="2x"
          style={iconStyle('linkedin')}
          onClick={() => handleClick('https://www.linkedin.com/in/sajol-das-a6856a175/')}
          onMouseEnter={() => setHoveredIcon('linkedin')}
          onMouseLeave={() => setHoveredIcon(null)}
          title="LinkedIn Profile"
        />
         <FontAwesomeIcon 
          icon={faFileAlt}
          size="2x"
          style={iconStyle('cv')}
          onClick={() => handleClick("https://drive.google.com/drive/folders/1p5rKzQWu5Nw1nL-4u98sniZ5RRrE-Rqr?usp=sharing")}
          onMouseEnter={() => setHoveredIcon('cv')}
          onMouseLeave={() => setHoveredIcon(null)}
          title="View CV"
        />
      </div>
    )
}
