// src/components/ParticlesBackground.jsx
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="fixed inset-0 w-full h-full "
      options={{
        fullScreen: true,
        particles: {
          number: {
            value: 40,
            density: { enable: true, value_area: 800 },
          },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: {
            value: 0.2,
            random: true,
          },
          size: {
            value: { min: 1, max: 3 },
            random: true,
          },
          links: {
            enable: true,
            color: "#ffffff",
            distance: 150,
            opacity: 0.1,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            out_mode: "bounce",
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            onClick: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            grab: { distance: 200, line_linked: { opacity: 0.5 } },
            repulse: { distance: 100 },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default ParticlesBackground;
