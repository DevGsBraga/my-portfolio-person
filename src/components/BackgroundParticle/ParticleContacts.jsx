import { useState,useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export const ParticlePContacts = () => {
    const [init, setInit] = useState(false);


    useEffect(() => {
      initParticlesEngine(async (engine) => {

        await loadSlim(engine);

      }).then(() => {
        setInit(true);
      });
    }, []);

    const particlesLoaded = (container) => {
      console.log(container);
    };

    const options = useMemo(
      () => ({
        background: {
          color: {
            value: "#001224",

          },
        },
        fpsLimit:120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: .5,
            },
          },
        },
        particles: {
          color: {
            value: "#000000",
          },
          links: {
            color: "#ffcc00",
            distance: 200,
            enable: true,
            opacity: 0.5,
            width: 2,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 150,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "square",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }),
      [],
    );

    if (init) {
      return (
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
          />

      );
    }
}
