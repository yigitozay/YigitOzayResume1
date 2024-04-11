import React from 'react';

const About = React.forwardRef((props, ref) => {
  return (

<section ref={ref} id="about" className="p-6">
   <div className="md:w-2/4 md:pl-8 mt-12 ml-96">

      <h2 className="text-2xl font-bold text-white  text-center mb-12">About Me</h2>

        <p className="text-mg text-gray-300 mb-4">

        Hello! I'm Yiğit Özay, a tech enthusiast who embarked on my journey with a Bachelor's in Management Information Systems and am currently enhancing my expertise through a Master’s in Computer Science. My professional path began as a Full Stack Developer, where I immersed myself in developing robust web applications with Angular/TypeScript and .NET. Seeking to broaden my technical scope and adapt to the ever-evolving tech landscape, I've transitioned to mastering React.js and am concurrently expanding my backend proficiency with Node.js.
        </p>
        <p className="text-mg text-gray-300 mb-4">
        This pivot is not merely about switching technologies; it's an integral part of my journey towards becoming a versatile Full Stack Developer once more. Alongside my academic pursuits, I'm dedicated to exploring the depths of React and Node.js, aiming to build scalable, efficient, and impactful solutions.

        As I navigate through my Master’s, my goal is to confront real-world challenges head-on, understanding my current standing and identifying areas for improvement. I'm on the lookout for opportunities that allow me to contribute while further honing my skills in a practical environment. 
        </p>
        </div>
    </section>
  );
})
export default About;
