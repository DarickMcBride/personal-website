'use client'
import React from 'react';
import Image from 'next/image';

const projects = [
  {
    name: 'Project 1',
    description: 'This is the first project',
    image: 'https://via.placeholder.com/150',
    githubLink: 'https://github.com/user/project1',
  },
  {
    name: 'Project 2',
    description: 'This is the second project',
    image: 'https://via.placeholder.com/150',
    githubLink: 'https://github.com/user/project2',
  },
  {
    name: 'Project 3',
    description: 'This is the third project',
    image: 'https://via.placeholder.com/150',
    githubLink: 'https://github.com/user/project3',
  },
];

const PortfolioPage = () => {
  return (
    <div>
      <h1>Portfolio</h1>
      {projects.map((project) => (
        <div key={project.name}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <Image src={project.image} alt={project.name} />
          <a href={project.githubLink}>GitHub</a>
        </div>
      ))}
    </div>
  );
};

export default PortfolioPage;
