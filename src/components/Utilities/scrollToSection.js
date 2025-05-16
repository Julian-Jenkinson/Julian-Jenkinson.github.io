
import { animate } from "framer-motion";

export const scrollToSection = (anchor) => {
  const id = `${anchor}-section`;
  const element = document.getElementById(id);

  if (element) {
    const top = element.offsetTop - 40;

    animate(window.scrollY, top, {
      type: "spring",
      stiffness: 130,
      damping: 17,
      onUpdate(value) {
        window.scrollTo(0, value);
      },
    });
  }
};
