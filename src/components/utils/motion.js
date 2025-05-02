export const slideIn = () => {
  return {
    hidden: {
      x: "100%", // Start off-screen
      opacity: 0, // Start fully transparent
    },
    visible: {
      x: 0, // Slide into view
      opacity: 1, // Fade in
      transition: {
        duration: 3, // Animation duration
      },
    },
    viewport:{
      once:true
    }
  };
};