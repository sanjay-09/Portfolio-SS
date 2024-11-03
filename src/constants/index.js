import project2 from "../assets/projects/project-2.png";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png"

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 2 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Associate Software Engineer",
    company: "Indus Valley Partners",
    description: `Involved in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "mongoDB"],
  },
  {
    year: "2022(March) - 2022(June)",
    role: "Frontend Developer",
    company: "Nagaroo",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "ReactJs", "NodeJs"],
  },
];

export const PROJECTS = [
  {
    title: "Full Stack FlatMate",
    image: project6,
    description:
      "Developed and deployed a full-stack Flatmate website on Render utilizing Next.js for both frontend and backend functionality providing users a streamlined way to find or list rental properties",
    url:"https://flatmate-gihg.onrender.com/",
    technologies: ["NextJs","TailWindCSS","MongoDb","Moongoose","NextAuth"],
  },
  {
    title: "Food Delivery App",
    image: project2,
    description:
      "An application for ordering food online based on the location preference.Existing Feature Like Top Rated Restaurants,Discounts on Restaurants",
    technologies: ["React","Redux","React-Router","TailWindCss","Custom Hooks"],
    url:"https://full-stack-food-delivery-app-one.vercel.app/",
    
  },
  {
    title: "BookMySeat",
    image: project5,
    description:
      "Implemented a seat booking system with robust concurrency management, handling both single-server and distributed concurrency control for reliable booking operations.",
    technologies: ["NextJs","ExpressJs","Prisma","RDS SQL SERVER","TailWindCss"],
    url:"https://full-stack-food-delivery-app-one.vercel.app/",
    
  },
  {
    title: "AirPulse",
    image: project4,
    description:
      "Led the design and development of a scalable microservices-based airline booking system, comprising five microservices: Flight and Search Service, Authentication Service, Booking Service, and Reminder Service",
    technologies: ["ExpressJs","Sequelize","MySql","MicroService Architecture"],
    url:"https://full-stack-food-delivery-app-one.vercel.app/",
    
  },
];

export const CONTACT = {
  address: "Gaur City,Noida",
  phoneNo: "9084211368",
  email: "sanjay.s01558@gmail.com",
};
