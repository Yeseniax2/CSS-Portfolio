import React from "react";

// imports for framer motion
import { motion } from "framer-motion";

// Will render the About page
export default function AboutPage() {
  return (
    <>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        animate={{ y: 10 }}
        transition={{ delay: .3, duration: .7 }}
        className="flex flex-wrap mt-40 justify-center items-center">
        <div
          className="w-full  sm:w-full md:w-full lg:w-1/3 xl:w-1/3 flex justify-center items-center"
        >
        <img
            alt= "yesenia benitez"
            className="object-cover items-center h-96 w-96 rounded-full"
            src={yeseniapicture}
          />
        </div>
        <div
          className="text-myColor-3 mt-5 h-full w-full sm:w-full md:w-full lg:w-2/3 xl:w-2/3"
        >
          <h1 variant="h2" className="mb-10 text-5xl text-myColor-2">
            About Me
          </h1>
          <p>
            I am a passionate Full Stack Web Developer with a skill set in MERN stack, I bring a dynamic skill set and a highly driven to success in every project I undertake.
            My journey as a web development has qualified me with a comprehensive understanding of MongoDB, Express.js, React.js, and Node.js, allowing me to provide a well built and modernize 
            application that intergate front-end and back-end functionalities.<br /><br />  
             
            Beyond my technical expertise, I am recognized as a team player that works very well in  collaborative environments and a diligent worker.
            </p>

         </div>

      </motion.div>


    </>
  )
}