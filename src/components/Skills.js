import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Heading} from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import { DiHtml5, DiCss3, DiReact, DiJavascript1, DiSass, DiPhp, DiJqueryLogo, 
         DiPython, DiMongodb, DiNpm } from "react-icons/di";
import { FaAws, FaDatabase, FaGithub, FaLess} from "react-icons/fa";
import { SiCplusplus, SiTypescript } from "react-icons/si";
import SkillGrid from "./SkillGrid";

const SkillsSection = () => {
  //implement colour theme?
  const TechList = [
    {
      tech: "HTML5",
      icon: <DiHtml5 />,
      bgColor: "#7661C2",
    },
    {
      tech: "CSS3",
      icon: <DiCss3/>,
      bgColor: "#5F8AAC",
    },
    {
      tech: "LESS",
      icon: <FaLess />,
      bgColor: "#37A8A0",
    },
    {
      tech: "SASS",
      icon: <DiSass />,
      bgColor: "#D4904F",
    },
    {
      tech: "JavaScript",
      icon: <DiJavascript1 />,
      bgColor: "#D56B70",
    },
    {
      tech: "TypeScript",
      icon: <SiTypescript size={35}/>,
      bgColor: "#5F8AAC",
    },
    {
      tech: "React.JS",
      icon: <DiReact />,
      bgColor: "purple.400",
    },
    {
      tech: "JQuery",
      icon: <DiJqueryLogo />,
      bgColor: "#37A8A0",
    },
    {
      tech: "Python",
      icon: <DiPython />,
      bgColor: "yellow.400",
    },
    {
      tech: "C++",
      icon: <SiCplusplus size={45}/>,
      bgColor: "#37A8A0",
    },
    {
      tech: "PHP",
      icon: <DiPhp/>,
      bgColor: "red.400",
    },
    {
      tech: "SQL",
      icon: <FaDatabase size={38} />,
      bgColor: "orange.400",
    },
    {
      tech: "AWS",
      icon: <FaAws />,
      bgColor: "blue.400",
    },
    {
      tech: "MongoDB",
      icon: <DiMongodb />,
      bgColor: "#D4904F",
    },
    {
      tech: "GitHub",
      icon: <FaGithub />,
      bgColor: "purple.400",
    },
    {
      tech: "NPM",
      icon: <DiNpm />,
      bgColor: "#D56B70",
    },
  ];

  return (
    <FullScreenSection as="section"
      id="skills-section"
      isDarkBackground
      pt={10}
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
      >
        Skills
      </Heading>
      <SkillGrid techList = {TechList}/>

      
    </FullScreenSection>
  );
};

export default SkillsSection;
