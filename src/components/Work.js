import React from "react";

const Work = () => {
  return (
    <div className="h-auto my-4 w-full">
      <p className="pl-5 text-white text-5xl md:text-6xl font-semibold">Work</p>
      <hr className="hr ml-5" />

      <div className="flex md:flex-row flex-col justify-around">
        <div className="md:w-2/5 p-3 primary-col ">
          <p className="font-semibold text-2xl md:text-3xl">
            IT ANAYST
          </p>
          <p className="text-lg">WIPRO</p>
          <p className="color-3">10/2019 - Present</p>
          <div className="text-sm text-white">
            <p>- Building stable and maintainable codebases using React</p>
            <p>
              - Enhanced user experience and accomplish webpage objectives by
                creating site structure, navigation, page optimization and
                graphics integraton
            </p>
            <p>- Developed user friendly and responsive websites</p>
            <p>
              - Implemented enhancements that improved web functionality and
              responsiveness
            </p>
          </div>
        </div>
        <div className="md:w-2/5  p-3 primary-col ">
          <p className="font-semibold text-2xl md:text-3xl">Mentor</p>
          <p className="text-lg">GNIOT</p>
          <p className="color-3">01/2019 - 07/2019</p>
          <div className="text-sm text-white">
            <p>- Stack mentor .</p>
            <p>- Taught students about Git, Github, Python</p>
            <p>
              - Full Stack web application using React in Frontend and
              Node.js, Express.js in Backend
            </p>
            <p>- Got a certificate of appreciation.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
