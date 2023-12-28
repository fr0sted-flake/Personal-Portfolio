import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white">
      <div className="max-w-screen-lg  mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div>
          <h2>I am a Full Stack Developer</h2>
          <p>
            I have 1 year of experience building and designing software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Next JS and Flutter.
          </p>
          <div>
            <button>
              Portfolio
              <span>
                <MdKeyboardArrowRight />
              </span>
            </button>
          </div>
        </div>
        <div>
            <img src={HeroImage} alt="My profile" className="rounded-2xl mx-auto w-2/3 md:w-full"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
