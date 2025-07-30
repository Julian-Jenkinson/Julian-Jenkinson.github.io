import { ChakraProvider, ColorModeScript, useColorModeValue } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import SkillsSection from "./components/Skills";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import theme from "./components/Theme";
import Starfield from "./components/Starfield";
import { Global } from "@emotion/react";

function AppContent() {
  const isDarkMode = useColorModeValue(false, true);

  return (
    <>
      {/* transparent bg for dark mode */}
      <Global
        styles={{
          body: {
            backgroundColor: isDarkMode ? "transparent" : "white",
          },
        }}
      />

      {/* startfield background for dark mode */}
      {isDarkMode && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            pointerEvents: "none",
          }}
        >
          <Starfield quantity={150} staticity={80} ease={20} />
        </div>
      )}

      <main>
        <Header />
        <LandingSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactMeSection />
        <Footer />
      </main>
    </>
  );
}

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* Color mode initial setup */}
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />

      {/* inside ChakraProvider so hooks work */}
      <AppContent />
    </ChakraProvider>
  );
}
