import Image from "next/image";
import React, { useState, useEffect } from "react";

import Lottie from "lottie-react";
import animationData from "../assets/animation_color1.json";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Home = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => {
      // Check if the screen width is greater than a certain threshold (e.g., 768px for desktop/laptop)
      if (window.innerWidth > 768) {
        setShowAnimation(true);
      } else {
        setShowAnimation(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial check when the component mounts
    handleResize();

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-primary/60 h-full ">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-4 xl:text-left h-full container mx-auto">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Hey.
            <br />I am{" "}
            <span className="text-accent" id="text">
              {" "}
              Abhinav Rai.
            </span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            I specialise in UI/UX designs, web applications and python
            programming
          </motion.p>
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div
          className="bg-none  xl:bg-cover xl:bg-right xl:bg-no-repeat
        w-full h-full absolute mix-blend-color-dodge translate-z-0"
        ></div>
        {/* Particles motion */}
        <ParticlesContainer />
        {/* Avater */}
        {/*add avatar later*/}
        <div></div>
        {/*animation*/}
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          style={{
            position: "absolute",
            right: "-400px",
            top: "30px",
            display: showAnimation ? "block" : "none",
          }}
        >
          <Lottie
            animationData={animationData}
            style={{ width: "50%", height: "50%" }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
