import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Custom hook to get window width
const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
};

const TopCourseList = () => {
  const windowWidth = useWindowWidth();
  const gridTemplateColumns = windowWidth <= 768
    ? 'repeat(2, minmax(170px, 1fr))'
    : 'repeat(auto-fill, minmax(280px, 1fr))';

  const images = [
    { src: "images/course/oLevel.png", title: "O Level", className: 'tcG' },
    { src: "images/course/ccc.png", title: "CCC", className: 'tcH' },
    { src: "images/course/software.png", title: "Graphics Designing", className: 'tcB' },
    { src: "images/course/reactJs.png", title: "React", className: 'tcA' },
    { src: "images/course/python.png", title: "Python Programming", className: 'tcE' },
    { src: "images/course/mongo.png", title: "Software Development", className: 'tcF' },
    { src: "images/course/tally.png", title: "Tally", className: 'tcF' },
    { src: "images/course/iot.png", title: "Internet", className: 'tcF' },
  ];

  return (
    <div
      className="card-group"
      style={{
        display: 'grid',
        gridTemplateColumns,
        gap: '2px',
      }}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={`card p-1 m-1 myshadow hoverCardE ${image.className}`} data-aos="fade-up">
          <img
            src={image.src}
            alt={image.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            className="img-fluid img-thumbnail h-100 card-img-top p-0 m-0"
          />
        </div>
      ))}
    </div>
  );
};

export default TopCourseList;
