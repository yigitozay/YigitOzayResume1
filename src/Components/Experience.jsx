import React from 'react';
import { FaAngular,FaDatabase } from 'react-icons/fa'; 
import { SiDotnet, SiTypescript, SiCsharp } from 'react-icons/si'; 


const Experience = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} id="experience" className="p-6 ml-96 md:w-2/4 mt-24">
      <h2 className="text-2xl md:text-2xl lg:text-2xl font-bold text-white mb-4 text-center">Experience</h2>
      <div className="mt-0">
        <h3 className="text-xl font-bold text-white mt-6 mb-1 ml-6">Full Stack Developer, TSKB</h3>
        <p className="text-gray-300 ml-6 md:w-auto">
        In my initial foray into the professional tech world as a Full Stack Developer at TSKB, I immersed myself in the agile methodology, quickly adapting to its collaborative and iterative approach. This position provided my first hands-on experience with real-life application development, where I played a key role in evolving UI designs to enhance user experience and engagement. Tasked with refining and optimizing existing business logic with .NET, I contributed to the efficiency and reliability of our backend systems. A significant achievement was leading the migration of legacy SQL databases to new, optimized structures, a process that underscored the importance of data integrity and performance in web applications. This role was instrumental in sharpening my development skills and deepening my understanding of full-stack development practices, marking the beginning of my journey in making impactful contributions to technology solutions.

</p>
        <div className="flex ml-6 mt-4 space-x-4">
          <div className="border p-2 rounded-md hover:bg-gray-800">

          <SiDotnet className="text-2xl text-gray-300 hover:text-white" />
            </div>
            <div className="border p-2 rounded-md hover:bg-gray-800">

          <FaAngular className="text-2xl text-gray-300 hover:text-white" />
          </div> 
          <div className="border p-2 rounded-md hover:bg-gray-800">

          <SiTypescript className="text-2xl text-gray-300 hover:text-white" />
          </div>
          <div className="border p-2 rounded-md hover:bg-gray-800">

          <SiCsharp className="text-2xl text-gray-300 hover:text-white" />
          </div>
          <div className="border p-2 rounded-md hover:bg-gray-800">

          <FaDatabase className="text-2xl text-gray-300 hover:text-white" />
          </div>

          {/* Add more icons as needed */}
        </div>
      </div>
    </section>
  );
})

export default Experience;
