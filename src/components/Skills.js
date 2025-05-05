import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Heading} from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import { DiHtml5, DiCss3, DiReact, DiJavascript1, DiLess, DiSass, DiMysql, DiPhp, DiJqueryLogo, DiJqueryUiLogo, DiPython, DiAws, DiGit, DiGithub, DiGithubAlt, DiGithubBadge, DiGithubFull } from "react-icons/di";
import { FaAws, FaDatabase, FaGithub, FaLess, FaPhp } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import SkillGrid from "./SkillGrid";



const SkillsSection = () => {
  const ColourTheme = ["red.400", "yellow.400"];
  const TechList = [
    {
      tech: "HTML5",
      icon: <DiHtml5 />,
      bgColor: "red.400",
    },
    {
      tech: "CSS3",
      icon: <DiCss3/>,
      bgColor: "orange.400",
    },
    {
      tech: "LESS",
      icon: <FaLess />,
      bgColor: "yellow.400",
    },
    {
      tech: "SASS",
      icon: <DiSass />,
      bgColor: "green.400",
    },
    {
      tech: "JavaScript",
      icon: <DiJavascript1 />,
      bgColor: "blue.400",
    },
    {
      tech: "React.JS",
      icon: <DiReact />,
      bgColor: "purple.400",
    },
    {
      tech: "JQuery",
      icon: <DiJqueryLogo />,
      bgColor: "pink.400",
    },
    {
      tech: "PHP",
      icon: <DiPhp />,
      bgColor: "red.400",
    },
    {
      tech: "SQL",
      icon: <FaDatabase />,
      bgColor: "orange.400",
    },
    {
      tech: "Python",
      icon: <DiPython />,
      bgColor: "yellow.400",
    },
    {
      tech: "C++",
      icon: <SiCplusplus />,
      bgColor: "green.400",
    },
    {
      tech: "AWS",
      icon: <FaAws />,
      bgColor: "blue.400",
    },
    {
      tech: "GitHub",
      icon: <FaGithub />,
      bgColor: "purple.400",
    },
  ];

  return (
    <FullScreenSection as="section"
      id="skills-section"
      isDarkBackground
      pt={10}
      alignItems="flex-start"
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
        Skills
      </Heading>
      <SkillGrid techList = {TechList}/>

      
    </FullScreenSection>
  );
};

export default SkillsSection;
