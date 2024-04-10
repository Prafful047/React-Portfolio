import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "My MusicZone",
    description:
      "A web based music player developed to understand and implement its functionalities using JavaScript.",
    getImageSrc: () => require("../images/photo7.png"),
    link: "https://praffulsmusiczone.netlify.app"
  },
  {
    title: "Currency Converter",
    description:
      "A seamless tool designed to simplify global transactions , developed to understand the functionalities of APIs in JavaScript.",
    getImageSrc: () => require("../images/photo9.png"),
    link: "https://praffulscurrencyconverter.netlify.app"

  },
  {
    title: "Calculator using React",
    description:
      "A simple calculator used to do basic arithmetic operations developed using React",
    getImageSrc: () => require("../images/photo5.png"),
    link: "https://praffulsreactcalculator.netlify.app"

  },
  {
    title: "Portfolio using HTML and CSS",
    description:
      "My first project built using raw HTML and CSS , helped me increase my proficiency in the languages",
    getImageSrc: () => require("../images/photo8.png"),
    link: "https://praffulawadhiya.netlify.app"

  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            link={project.link}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
