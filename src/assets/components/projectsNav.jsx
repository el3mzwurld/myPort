import {
  Box,
  Link as ChakraLink,
  Text,
  Heading,
  Grid,
  Image,
  VStack,
  Button,
} from "@chakra-ui/react";
import { LuExternalLink } from "react-icons/lu";
import { FiArrowUpRight } from "react-icons/fi";
import projects from "../content/projects.json";
import { useEffect, useState } from "react";
export const Projects = () => {
  // Manage Hover states in Grid items
  const [isHover, setisHover] = useState(false);
  const Arr = [...projects];
  const projectArr = [];
  for (let i = Arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [Arr[i], Arr[j]] = [Arr[j], Arr[i]];
  }
  for (let i = 0; i <= 3; i++) {
    projectArr[i] = Arr[i];
  }

  const headerSubTxt =
    "HERE’S A SELECTION OF PROJECTS THAT SHOWCASE MY PASSION FOR DESIGN AND DEVELOPMENT, REFLECTING CREATIVITY AND INNOVATION.";
  return (
    <Box className="main-projects">
      <Box
        className="title"
        display={{ base: "none", md: "flex" }}
        width={"100%"}
        height={{ mdToLg: "180px", xl: "208px" }}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text
          height={"100%"}
          width={"45%"}
          fontSize={22}
          lineHeight={1.6}
          fontWeight={500}
          _selection={{ color: "gray", backgroundColor: "black" }}
        >
          Driven by curiosity and a love for design, I create simple,
          functional, and visually striking digital experiences. As a student,
          I'm always learning and exploring new ideas.
        </Text>
        <Text
          display={"flex"}
          flexDirection={"column"}
          height={"100%"}
          width={"35%"}
          fontSize={16}
          textAlign={"right"}
          gap={"10px"}
          color={"gray.500"}
          _selection={{ color: "black", backgroundColor: "white" }}
        >
          The fusion of my passion for design, development, and seamless user
          experiences places me at the intersection of creativity and technology
          in the digital world.
          <span>
            <ChakraLink
              variant={"plain"}
              textDecoration={"none"}
              color={"black"}
              fontSize={"20px"}
              display={"flex"}
              justifyContent={"flex-end"}
              href="#home"
            >
              More About Me <LuExternalLink color="black" size={25} />
            </ChakraLink>
          </span>
        </Text>
      </Box>

      <Box className="project-grid">
        <Box className="title">
          <Heading className="title-header">Projects</Heading>
          <Text
            width={"35%"}
            _selection={{
              color: "black",
              background: "transparent",
              fontWeight: 500,
            }}
          >
            {headerSubTxt.toUpperCase()}
          </Text>
        </Box>

        <Grid
          className="grid"
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          templateRows={{ base: "repeat(4, 1fr)", md: "repeat(2, 430px)" }}
        >
          {projectArr.map((project, index) => {
            return (
              <GridItem
                key={index}
                name={project.title}
                Link={project.link}
                Stack={project.stack}
                imageUrl={project.imageUrl}
                isHover={isHover}
                setisHover={setisHover}
                inDev={project.inDev}
              />
            );
          })}
        </Grid>
      </Box>
      <ChakraLink href="/projects" variant={"plain"}>
        <ExploreBtn />
      </ChakraLink>
    </Box>
  );
};

const GridItem = ({
  name = "Project Name",
  Link = "project link",
  Stack = [],
  imageUrl = "Image Url",
  setisHover,
  isHover,
  inDev = false,
}) => {
  return (
    <Box color={"black"} className="grid-item">
      <div className="preview">
        <Image src={imageUrl} width={"100%"} height={"100%"} />
        {inDev && <p className="inDev true">STILL IN DEV.</p>}
      </div>
      <div className="link">
        <VStack width={"100%"} alignItems={"flex-start"}>
          <span style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <ChakraLink variant={"plain"} href={Link} target="blank">
              <span id="ico">
                <FiArrowUpRight size={25} color="black" />
              </span>
            </ChakraLink>
            <p id="project-name">{name}</p>
          </span>
          <span
            style={{ display: "flex", alignItems: "center", gap: "20px" }}
            id="stack"
          >
            {Stack.map((lang, index) => {
              if (index != Stack.length - 1) {
                return <span key={index}>{lang.toUpperCase().trim()} +</span>;
              } else {
                return <span key={index}>{lang.toUpperCase()}.</span>;
              }
            })}
          </span>
        </VStack>
      </div>
    </Box>
  );
};

const ExploreBtn = () => {
  const num = projects.length;

  return (
    <Button
      id="grid-btn"
      backgroundColor={"none"}
      color={"black"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      EXPLORE ({num})
    </Button>
  );
};
