import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Heading, SimpleGrid, Box } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import { useColorModeValue } from "@chakra-ui/react";

const projects = [
  {
    title: "Straight-UI (IN DEVELOPMENT)",
    type: "React UI-Library",
    description:
      "Straight-UI is a modern, React-based UI component library built for fast, flexible development in both TypeScript and JavaScript projects.",
    feature1Heading:"Storybook",
    feature1Description:"Utilizing Storybook to visually present and test each component in isolation, enabling a better development experience and richer documentation.",
    feature2Heading:"Early access via NPM",
    feature2Description: "Straight-UI is available for installation via NPM. Please note this is an alpha release with experimental and limited components",
    feature3Heading:"TypeScript and JavaScript",
    feature3Description:"Built in TypeScript and fully compatible with JavaScript projects.",
    summary:"Updates coming soon — check back shortly!",
    getImage1Src: () => require("../images/straight-1.png"),
    //getImage2Src: () => require("../images/project1.2.png"),
    //getImage3Src: () => require("../images/project1.3.png"),
    stack: ['React', 'TypeScript', 'JavaScript', 'Storybook', 'NPM', "Rollup", "Vite"],
    repo: "https://github.com/julian-jenkinson/Straight-UI",
    url: "https://Julian-Jenkinson.github.io/Straight-UI/",
    urlLabel: "Storybook",

  },
  {
    title: "Recipe Extractor API (2025)",
    type: "REST API",
    description:
      "A REST API that extracts recipe details (title, ingredients, instructions, images) from any recipe webpage URL and returns the data in JSON format.",
    feature1Heading: "The Goal",
    feature1Description: "Recipe sites often make it difficult to store and re-find recipes. This API extracts recipe data by targeting JSON-LD and Microdata (schema.org) formats, with fallback parsing to handle diverse website structures. The backbone for an upcoming Recipe Index App.",
    feature2Heading: "Available Publicly",
    feature2Description: "Supporting both GET and POST methods, this API is publicly accessible and easy to integrate, allowing you to extract recipes quickly and efficiently.",
    feature3Heading:"Testing",
    feature3Heading: "Testing",
    feature3Description: "Utilising the Jest testing framework to test the API across many different recipe sites, ensuring consistent and reliable extraction of recipe data.",
    summary:"Try it out yourself: curl \"https://recipe-extractor-api.fly.dev/extract?url=https://cooking.nytimes.com/recipes/12965-spaghetti-carbonara\"",
    getImage1Src: () => require("../images/extractor-1.png"),
    //getImage2Src: () => require("../images/extractor-2.png"),
    //getImage3Src: () => require("../images/project1.3.png"),
    stack: ['TypeScript', 'Node.js', 'Express', 'Axios', 'Cheerio', "Fly.io", "Docker"],
    repo: "https://github.com/julian-jenkinson/Recipe-Extractor-API",
    url: "https://recipe-extractor-api.fly.dev/extract?url=https://www.bbcgoodfood.com/recipes/chicken-tikka-masala",
    urlLabel: "View Example",
  },
  {
    title: "Graduate Nurse Job Match (2024)",
    type: "Job Platform",
    description:
      "Job matching platform for nursing and midwifery graduates with a focus on regional and rural Australia. Create a profile, fill in your job preferences and get matches that suit you.",
    feature1Heading:"Dynamic Web Application",
    feature1Description:"Dynamic web application powered by PHP and SQL. This app will search the jobs database and match you with job opportunities that suit you",
    feature2Heading:"GIS Integration",
    feature2Description:"Map assisted job search powered by Google Maps API",
    feature3Heading:"Chatbot",
    feature3Description:"Integrated chat bot for guided interaction. Utilising Google Dialogflow",
    summary:"A complete job search platform allowing employers to list jobs and graduates to find them. Plus a few extra user-friendly enhancements designed to streamline the process and help job seekers find more opportunities that suit them.",
    getImage1Src: () => require("../images/jobmatch-1.png"),
    getImage2Src: () => require("../images/jobmatch-2.png"),
    getImage3Src: () => require("../images/jobmatch-3.png"),
    stack: ['PHP', 'HTML', 'CSS', 'JavaScript', "SQL", "AWS", "NGINX"],
    repo: "https://github.com/julian-jenkinson/Graduate_Nurse_Job_Match",
    //url: "https://URL HERE",
    //urlLabel: "",

  },
  
  {
    title: "Lume Web Design (2025)",
    type: "Static Web Site",
    description:
      "A website I developed as a side project. My intention was to master the fundamentals of web development using pure HTML, CSS (LESS) and JS.",
    feature1Heading:"Fully responsive design",
    feature1Description:"A mobile first design that looks great accross all screen sizes.",
    feature2Heading:"Built for performance 🔥️",
    feature2Description:"Perfect scores on Googles lighthouse test promotes higher search rankings and increased user satisfaction.",
    feature3Heading:"SEO Ready",
    feature3Description: "Optimized images, fast load times, relevant keywords, best accessibility practices, and structured meta tags work together to boost search engine visibility and rankings. This site is ready to go.",
    getImage1Src: () => require("../images/lume-1.png"),
    getImage2Src: () => require("../images/lume-2.png"),
    stack: ['HTML', 'CSS', 'LESS', 'JavaScript', 'Netlify'],
    repo: "https://github.com/julian-jenkinson/Lume_Web_Design",
    url: "https://lumewebdesign.com.au",
    urlLabel: "Website",

  },
  {
    title: "My Portfolio (2025)",
    type: "Portfolio",
    description:
      "My personal porfolio website built in React and styled with Chakra UI.",
    feature1Heading:"Built in React",
    feature1Description:"It covers all the core concepts of react, it's component driven, theres hooks, states, props, conditional rendering, event handling, a form using controlled components, and everthing else that makes a versatile React app.",
    feature2Heading:"Darkmode",
    feature2Description:"Save your eyes - Dark mode by default! Leveraging Chakra's dark mode greatness. Try it here ->",
    feature3Heading:"Buttery Interactions",
    feature3Description:"Utilizing Framer Motion to deliver smooth scrolling, swooshing popouts, and an overall springy, dynamic user experience.",
    summary:"Part portfolio, part sandbox — A place to code, learn, and sometimes break things!",    
    getImage1Src: () => require("../images/portfolio-1.png"),
    //getImage2Src: () => require("../images/project3.1.png"),
    getImage3Src: () => require("../images/portfolio-3.png"),
    stack: ['React', 'JavaScript', 'Chakra UI', 'Formik', 'Framer-Motion'],
    repo: "https://github.com/julian-jenkinson/Julian-Jenkinson.github.io",
    url: "https://julian-jenkinson.github.io",
    urlLabel: "Website",
  },
];


const ProjectsSection = () => {
  return (
    <FullScreenSection as="section"
      id="projects-section"
      isDarkBackground
      pt={10}
      pb={6}
      alignItems="flex-center"
      margin="auto"
      spacing={8}
      bg={useColorModeValue("white", "black")} 
      color={useColorModeValue("black", "white")}
    >
      <Heading
        as="h1"
        textAlign="center"
        w="100%"
        fontWeight="900"
        fontSize="50"
        pb=".3em"
      >
        Projects
      </Heading>
      
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={8}>
        {projects.map((project) => (
          <Box key={project.title} alignSelf="start">
            <ProjectCard
              key={project.title}
              title={project.title}
              type={project.type}
              description={project.description}
              feature1Heading={project.feature1Heading}
              feature1Description={project.feature1Description}
              feature2Heading={project.feature2Heading}
              feature2Description={project.feature2Description}
              feature3Heading={project.feature3Heading}
              feature3Description={project.feature3Description}
              summary={project.summary}
              image1Src={project.getImage1Src?.()}
              image2Src={project.getImage2Src?.()}
              image3Src={project.getImage3Src?.()}
              stack={project.stack}
              repo={project.repo}
              url={project.url}
              urlLabel={project.urlLabel}
            />
          </Box>
        ))}
      </SimpleGrid>
      
    </FullScreenSection>
  );
};

export default ProjectsSection;
