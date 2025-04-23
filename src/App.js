//import { ColorModeProvider } from "@/components/ui/color-mode"
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import SkillsSection from "./components/Skills";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import theme from "./components/Theme"



function App() {
  return (
    <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
 
        <main>
          <Header />
          <LandingSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactMeSection />
          <Footer />
          
        </main>
      
    </ChakraProvider>
    </>
  );
}

export default App;
