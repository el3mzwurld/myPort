import { VStack, Box, Flex, Image, Text, Link } from "@chakra-ui/react";
import { LuExternalLink, LuGithub } from "react-icons/lu";
import { IoIosHome, IoMdCall, IoMdHome } from "react-icons/io";
import { FaDiagramProject, FaJs } from "react-icons/fa6";
import { PiReadCvLogoBold } from "react-icons/pi";
import { FaPhone } from "react-icons/fa";
import { Stack } from "../assets/components/stack";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Projects } from "../assets/components/projectsNav";
import { CaCv } from "../assets/components/contactMe";
export const Home = () => {
  // projects | stacks & tech
  const [activePage, setActivePage] = useState("projects");

  const navConfig = [
    { id: "contact", icon: FaPhone, link: "#contact" },
    { id: "stack", icon: FaJs, link: "#main" },
    { id: "projects", icon: FaDiagramProject, link: "#main" },
    { id: "github", icon: LuGithub, link: "https://github.com/el3mzwurld" },
    { id: "cv", icon: PiReadCvLogoBold, link: "#cv" },
  ];
  const handleNavClick = (item) => {
    if (item.link.startsWith("http")) {
      window.open(item.link, "_blank");
      return;
    }

    if (item.id !== "projects" || item.id !== "stack") {
      // Animated scroll
      const target = document.querySelector(item.link);
      if (target) {
        const offset = 80; // adjust if header overlaps
        const targetY =
          target.getBoundingClientRect().top + window.scrollY - offset;

        smoothScrollTo(targetY, 800);
      }
    }

    // SPA view switching
    if (item.id === "projects" || item.id === "stack") {
      setActivePage(item.id);
    }
  };
  const smoothScrollTo = (targetY, duration = 700) => {
    const startY = window.scrollY;
    const distance = targetY - startY;
    let startTime = null;

    // Smooth easing (natural, not robotic)
    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animateScroll = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);

      window.scrollTo(0, startY + distance * eased);

      if (elapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <div className="home">
      {/* Header component will have the draggable nav, that nav should be linked to the SPA framer motion logic */}
      <header id="home">
        <Box className="header-Bkg"></Box>
        <Box className="header-txt">
          <Box className="main">
            <Text
              _selection={{ color: "white", backgroundColor: "transparent" }}
            >
              Front-end Developer & Designer
            </Text>
          </Box>
          <Box
            className="top-txt"
            display={{ base: "none", md: "flex" }}
            width={{ base: 0, md: "90%" }}
            position={"absolute"}
            height={{ base: 0, md: "120px" }}
            justifyContent={"space-between"}
            alignItems={"flex-start"}
          >
            <Text display={"flex"} gap={1.5}>
              Made by{" "}
              <Link
                href="https://github.com/el3mzwurld"
                variant={"plain"}
                outline={"none"}
                color={"white"}
              >
                el3mzwurld <LuExternalLink />
              </Link>
            </Text>
            <Text width={"30%"} height={"100%"} textAlign={"right"}>
              A creative developer and designer focused on crafting modern,
              intuitive digital experiences through thoughtful design and clean,
              scalable code.
            </Text>
          </Box>
          <Box
            className="top-name"
            display={{ base: "flex", md: "none" }}
            width={{ base: 0, md: "90%" }}
            position={"absolute"}
            height={{ base: 0, md: "120px" }}
            justifyContent={"space-between"}
            alignItems={"flex-start"}
          >
            <Text display={"flex"} gap={1.5} id="name">
              <Link variant={"plain"} href="https://github.com/el3mzwurld">
                Elemi.co
              </Link>
            </Text>
            <Text width={"30%"} height={"100%"} textAlign={"right"} id="about">
              Hi, Welcome to my portfolio...
            </Text>
          </Box>
          <Box className="btn"></Box>
        </Box>

        <nav>
          <ul>
            {navConfig.map((item) => {
              const Ico = item.icon;
              const isActive = activePage === item.id;

              return (
                <motion.li
                  key={item.id}
                  className={isActive ? "active" : ""}
                  onClick={() => handleNavClick(item)}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Ico color={isActive ? "black" : "white"}></Ico>
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="nav-indicator"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.li>
              );
            })}
          </ul>
        </nav>
      </header>

      {/* All SPA components will be rendered here and should be flexible */}

      <main id="main">
        <AnimatePresence mode="wait">
          {activePage === "projects" && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <Projects />
            </motion.div>
          )}

          {activePage === "stack" && (
            <motion.div
              key="stack"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <Stack />
            </motion.div>
          )}
        </AnimatePresence>

        <section className="CaCV" id="contact">
          <CaCv />
        </section>
      </main>

      {/* Footer should have a sort of contact me CTA be creative don't just copy the figma design dawg */}
      {/* CV download CTA should be dope as well, probably something like 'your code bro, Elemz.' or 'more about your friendly dev. Elemz -> and then the link to download the ting idk...something like that' */}
    </div>
  );
};
