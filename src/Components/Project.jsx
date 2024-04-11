// Project.js
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import dashboardImage from '../assets/dashboard1.jpg';
import pathFinderImage from '../assets/pathfinder.jpg';
import weekPlannerImage from '../assets/weekplanner.jpg';
import commerceDesignImage from '../assets/e-commerce2.jpg';
import commerceAppImage from '../assets/ecommerce.jpg';


const projects = [
  {
    id: 1,
    title: 'Dashboard',
    description: "Leveraging Syncfusion's comprehensive UI toolkit and utilizing dummy data, this project showcases the development of a responsive and visually appealing admin dashboard. Designed to provide an intuitive user experience, the dashboard efficiently organizes and presents data through a variety of widgets and data visualization components, including charts, grids, and gauges." ,
    imageUrl: dashboardImage,
    projectUrl: 'https://dashboard-eosin-eight.vercel.app',
    repoUrl: 'https://github.com/yigitozay/Dashboard',
  },
  {
    id: 2,
    title: 'Pathfinder Algorithms',
    description: "This project applies Breadth-First Search (BFS) and Depth-First Search (DFS) algorithms to navigate and solve randomly generated mazes. It offers a visual comparison of the paths these algorithms take, demonstrating their approaches to problem-solving in a clear, interactive format. This tool not only highlights my skills in algorithm implementation but also my interest in making complex concepts accessible and engaging. " ,
    imageUrl: pathFinderImage,
    projectUrl: 'https://pathfinder-self.vercel.app',
    repoUrl: 'https://github.com/yigitozay/Pathfinder',
  },
  {
    id: 3,
    title: 'WeeklyPlanner',
    description: "This project introduces a user-friendly weekly planner that integrates Firebase Authentication for secure data storage. It features an intuitive weekly calendar view, allowing users to easily click on their desired day to create and save notes. Designed for simplicity and efficiency, this planner helps users organize their tasks and appointments with ease, ensuring their information is safely stored and accessible across devices. " ,
    imageUrl: weekPlannerImage,
    projectUrl: 'https://weekly-planner-seven.vercel.app/week-view',
    repoUrl: 'https://github.com/yigitozay/WeeklyPlanner',
  },
  {
    id: 4,
    title: 'E-commerce design',
    description: "Figma course project for learning how to use figma. E-commerce website design. " ,
    imageUrl: commerceDesignImage,
    projectUrl: 'https://www.figma.com/file/WiZzdmqYTbtLVYig6zmmFv/E-comemrce?type=design&node-id=26596%3A942&mode=design&t=h4kwffvaFzvNsMKL-1',
  },
  {
    id: 5,
    title: 'E-commerce',
    description: "This project showcases an e-commerce web application focused on delivering a streamlined and engaging shopping experience. It's crafted using React to provide a responsive user interface and employs React Router for smooth and dynamic page transitions. On the backend, Firebase's authentication service is implemented to manage secure user access, while Firebase collections are utilized to store and retrieve product data efficiently." ,
    imageUrl: commerceAppImage,
    projectUrl: 'https://e-commerce-portfolio-navy.vercel.app',
    repoUrl: 'https://github.com/yigitozay/E-commerce',

  },
];
const Project = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} id="projects" >
      <div  className="flex flex-wrap justify-center mt-24 mx-auto ml-60">

        {projects.map((project) => (
          <div 
            key={project.id} 
            className="flex flex-col md:flex-row items-center justify-center mb-8 p-4 
                       transition duration-300 ease-in-out hover:shadow-lg hover:border 
                       hover:border-blue-500 rounded-lg md:w-3/4 lg:w-3/5"
          >
            <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="flex justify-center w-full md:w-1/2">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="h-auto max-w-full rounded-lg shadow-lg object-cover object-center" 
              />
            </a>
            <div className="flex flex-col items-center text-center mt-8 md:mt-0 md:items-start md:text-left md:ml-8">
              <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
              <p className="text-gray-300 mb-4 w-full md:max-w-md">{project.description}</p>
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500">
                <FaGithub className="text-white mr-2" />
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
      </section>
)});
  
  
  export default Project;
  