import { Carousel } from "@material-tailwind/react";
import { motion }from "framer-motion";

function Cert(props) {
  return (
    <div
      className="flex items-center justify-center flex-col gap-4"
      >
          <img
          src={props.image}
          alt="image 1"
          className="h-1/2 w-1/2 object-cover"
        />
        <a
        className="text-white font-bold text-lg hover:underline hover:text-myColor-2 p-4 rounded-lg bg-myColor-2 hover:bg-white hover:text-black transition duration-300 ease-in-out"
        target="_blank"
        href={props.link}
        >
          View Certificate
        </a>
        <p
        className="text-myColor-3 text-3xl"
        >
          {props.title}
        </p>
        <p
        className="text-white text-lg px-20 lg:px-40 xl:px-60"
        >
          {props.description}
        </p>
      </div>
  )
}
 
export default function CertsPage() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    animate={{ y: 10 }}
    transition={{ delay: .3, duration: .7 }}>
      <h1
      className="text-myColor-3 text-5xl text-center mt-40 mb-20"
      >
        Certifications
      </h1>
    <Carousel className="rounded-xl">
      
      <Cert
      image=""
      link=""
      title="Meta : Programming with JavaScript"
      description=""
      />
     
      <Cert
      image="src/public/mernbadge.png"
      link="https://api.badgr.io/public/assertions/g0kEtwNUSXuV75a5EJWC2g?identity__email=byesenia04%40yahoo.com"
      title="UCF Full Stack Web Development Bootcamp Certificate"
      description="This intensive, 24-week coding bootcamp, offered through the University of Central Florida, provided a comprehensive curriculum that equipped me with the skills to become a full-stack web developer. The course began with the fundamentals of web development, including HTML, CSS, and JavaScript, and gradually progressed to advanced topics such as Node.js, Express, and React. Throughout the course, I developed a strong foundation in computer science, learning to build and deploy web applications, and gained experience working with databases, APIs, and server-side technologies. The course required me to work with diverse teams on demanding timelines to build full functional web applications from start to finish. This comprehensive course has provided me with the skills and knowledge to develop and deploy full-stack web applications."
    />
      </Carousel>
    </motion.div>
  );
}