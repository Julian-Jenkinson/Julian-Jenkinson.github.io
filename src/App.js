import { ChakraProvider, ColorModeScript, extendTheme, useColorModeValue } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import SkillsSection from "./components/Skills";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import theme from "./components/Theme";
import Starfield from "./components/Starfield";
import { Global } from "@emotion/react";

// ✅ Inner component that can safely use Chakra hooks
function AppContent() {
  const isDarkMode = useColorModeValue(false, true);

  return (
    <>
      {/* Make body transparent only in dark mode */}
      <Global
        styles={{
          body: {
            backgroundColor: isDarkMode ? "transparent" : "white",
          },
        }}
      />

      {/* Background Layer in dark mode */}
      {isDarkMode && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1, // keep behind everything
            pointerEvents: "none",
          }}
        >
          <Starfield quantity={130} maxDistance={80} ease={50} />
        </div>
      )}

      {/* Main App Content */}
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

      {/* ✅ Now inside ChakraProvider so hooks work */}
      <AppContent />
    </ChakraProvider>
  );
}
