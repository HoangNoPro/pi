import React from "react";

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
          EXPLORE NOW
        </p>
        <p className="text-gray-300 text-center ">
          As an avid gamer, I am fascinated by the complex combination of logic and creativity. My expertise focuses on games, where I seamlessly blend fundamentals with innovation.
          <br />
          <br />
          With a passion for creating elegant solutions, I always find innovative ways to play, constantly learning from other players.
        </p>
      </div>
    </section>
  );
};

export default About;
