import {
  Box,
  Carousel as Caru,
  Grid,
  GridItem,
  Heading as H,
  VStack as MobStack,
  Text as Txt,
  IconButton,
} from "@chakra-ui/react";
import {
  SiBootstrap,
  SiChakraui,
  SiFigma,
  SiGit,
  SiGithub,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";
import { FaJsSquare } from "react-icons/fa";
import { useEffect, useState } from "react";
import { FaCss3, FaHtml5, FaReact } from "react-icons/fa6";

export const Stack = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Box className="stack">
      {windowWidth > 768 ? <DeskGrid /> : <MobGrid />}
    </Box>
  );
};

const MobGrid = () => {
  return (
    <>
      <p id="title">
        These are a few technologies i employ to develop, maintain and
        collaborate on my work.
      </p>
      <Caru.Root orientation="vertical" slideCount={4} className="mob-stack">
        <Caru.ItemGroup width={"100%"}>
          <Caru.Item>
            <Box className="stack-item">
              <div className="ico">
                <span>
                  <FaJsSquare color="yellow" />
                </span>{" "}
                <span>
                  <FaHtml5 color="steelblue" />
                </span>{" "}
                <span>
                  <FaReact color="#61DAFB" />
                </span>{" "}
                <span>
                  <SiTypescript color="#007ACC" />
                </span>
              </div>
              <div className="txt">
                <Txt className="title">Front-End Development</Txt>
                <Txt className="para">
                  Building engaging and user-friendly web interfaces using
                  modern frameworks and technologies with expertise.
                </Txt>
              </div>
            </Box>
          </Caru.Item>
          <Caru.Item>
            <Box className="stack-item">
              {" "}
              <div className="ico">
                <span>
                  <FaCss3 color="#1572B6" />
                </span>{" "}
                <span>
                  <SiChakraui color="#38B2AC" />
                </span>{" "}
                <span>
                  <SiBootstrap color="#6610F2" />
                </span>{" "}
              </div>
              <div className="txt">
                <Txt className="title">Styling and Design</Txt>
                <Txt className="para">
                  On top of the front end technologies I utilize, these are the
                  UI libraries and styling technologies i implement to bring my
                  applications to life.{" "}
                </Txt>
              </div>
            </Box>
          </Caru.Item>{" "}
          <Caru.Item>
            <Box className="stack-item">
              <div className="ico">
                <span>
                  <SiFigma />
                </span>{" "}
              </div>
              <div className="txt">
                <Txt className="title">UI/UX Design</Txt>
                <Txt className="para">
                  Although it's not a strong skill of mine, i sometimes use it
                  to design user-centric interfaces that are intuitive and easy
                  to navigate.
                </Txt>
              </div>
            </Box>
          </Caru.Item>
          <Caru.Item>
            <Box className="stack-item">
              <div className="ico">
                <span>
                  <SiGit color="F34F29" />
                </span>{" "}
                <span>
                  <SiGithub color="white" />
                </span>{" "}
                <span>
                  <SiVercel color="black" />
                </span>{" "}
              </div>
              <div className="txt">
                <Txt className="title">
                  Version control, collaboration & hosting
                </Txt>
                <Txt className="para">
                  Effectively manage code, collaborate on projects to ensure
                  seamless teamwork and host projects for accessibility.
                </Txt>
              </div>
            </Box>
          </Caru.Item>
        </Caru.ItemGroup>
        <Caru.Control
          height={"100%"}
          justifyContent={"space-between"}
          width={"18px"}
        >
          <Caru.PrevTrigger asChild>
            <IconButton variant={"ghost"} size={"base"}>
              <FaChevronUp color="black" />
            </IconButton>
          </Caru.PrevTrigger>
          <Caru.Indicators background={"black"} />
          <Caru.NextTrigger asChild>
            <IconButton variant={"ghost"} size={"base"}>
              <FaChevronDown color="black" />
            </IconButton>
          </Caru.NextTrigger>
        </Caru.Control>
      </Caru.Root>
    </>
  );
};

const DeskGrid = () => {
  return (
    <>
      <Grid
        className="stack-grid"
        templateColumns={"repeat(3, 450px)"}
        templateRows={"repeat(3, 240px)"}
      >
        <GridItem columnSpan={1} rowSpan={2}>
          <Box width={"100%"} height={"100%"} className="box-big">
            <div className="ico">
              <span>
                <FaJsSquare color="yellow" />
              </span>{" "}
              <span>
                <FaHtml5 color="steelblue" />
              </span>{" "}
              <span>
                <FaReact color="#61DAFB" />
              </span>{" "}
              <span>
                <SiTypescript color="#007ACC" />
              </span>
            </div>
            <div className="txt">
              <Txt className="title">Front-End Development</Txt>
              <Txt className="para">
                Building engaging and user-friendly web interfaces using modern
                frameworks and technologies with expertise.
              </Txt>
            </div>
          </Box>
        </GridItem>
        <GridItem colSpan={1} rowSpan={1}>
          <Box width={"100%"} height={"100%"} className="box-small">
            <div className="ico">
              <span>
                <FaCss3 color="#1572B6" />
              </span>{" "}
              <span>
                <SiChakraui color="#38B2AC" />
              </span>{" "}
              <span>
                <SiBootstrap color="#6610F2" />
              </span>{" "}
            </div>
            <div className="txt">
              <Txt className="title">Styling and Design</Txt>
              <Txt className="para">
                On top of the front end technologies I utilize, these are the UI
                libraries and styling technologies i implement to bring my
                applications to life.{" "}
              </Txt>
            </div>
          </Box>
        </GridItem>
        <GridItem colSpan={1} rowSpan={1}>
          <Box width={"100%"} height={"100%"} className="box-small">
            <div className="ico">
              <span>
                <SiFigma />
              </span>{" "}
            </div>
            <div className="txt">
              <Txt className="title">UI/UX Design</Txt>
              <Txt className="para">
                Although it's not a strong skill of mine, i sometimes use it to
                design user-centric interfaces that are intuitive and easy to
                navigate.
              </Txt>
            </div>
          </Box>
        </GridItem>
        <GridItem colSpan={1} rowSpan={1}>
          <Box width={"100%"} height={"100%"} className="box-small">
            <div className="ico">
              <span>
                <SiGit color="F34F29" />
              </span>{" "}
              <span>
                <SiGithub color="white" />
              </span>{" "}
              <span>
                <SiVercel color="black" />
              </span>{" "}
            </div>
            <div className="txt">
              <Txt className="title">
                Version control, collaboration & hosting
              </Txt>
              <Txt className="para">
                Effectively manage code, collaborate on projects to ensure
                seamless teamwork and host projects for accessibility.
              </Txt>
            </div>
          </Box>
        </GridItem>
        <GridItem colSpan={1} rowSpan={1}>
          <Box width={"100%"} height={"100%"} className="box-small">
            <div className="skills">
              <span>Object-oriented Programming</span>{" "}
              <span>Problem Solving</span>
              <span>Data Structures</span>
              <span>Core programming principles</span>
            </div>
            <div className="txt">
              <Txt className="title">Core Computer Science Principles</Txt>
              <Txt className="para">
                Demonstrating a strong foundation in core computer science
                principles, including problem-solving, system design, and
                computing techniques.
              </Txt>
            </div>
          </Box>
        </GridItem>
        <GridItem colSpan={3} rowSpan={1}>
          <Box width={"100%"} height={"100%"} className="box-offset">
            <div className="skills">
              <span>Time mgt</span>
              <span>People Skills</span>
              <span>Communication</span>
              <span>Self taught programming</span>
            </div>

            <div className="txt">
              <Txt className="title">Personal Development</Txt>
              <Txt className="para">
                With these technologies, I host and maintain projects. Version
                control is important and with Git, i can effectively manage code
                and also collaborate on projects to ensure seamless teamwork.
              </Txt>
            </div>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};
