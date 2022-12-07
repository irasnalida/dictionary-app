import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
//import { loadFull } from "tsparticle"
import { useCallback, useMemo } from "react";

const ParticlesComponent =() => {
    const options = useMemo(() => {
        return {
            fpsLimit: 60,
  fullScreen: {
    enable: true
  },
  interactivity: {
    detect_on: "window",
    events: {
      onClick: { enable: false, mode: "push" },
      onHover: {
        enable: false,
        mode: "repulse",
        parallax: { enable: false, force: 60, smooth: 10 }
      },
      resize: true
    },
    modes: {
      bubble: { distance: 400, duration: 2, opacity: 0.8, size: 40, speed: 3 },
      grab: { distance: 400, links: { opacity: 1 } },
      push: { quantity: 4 },
      remove: { quantity: 2 },
      repulse: { distance: 200, duration: 0.4 }
    }
  },
  particles: {
    color: "#ba82e8",
    links: {
      color: "random",
      distance: 150,
      enable: false,
      opacity: 0.4,
      width: 1
    },
    move: {
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
      bounce: false,
      direction: "bottom",
      enable: true,
      out_mode: "out",
      random: false,
      speed: 1,
      straight: false
    },
    rotate: {
      animation: {
        enable: true,
        speed: 10,
        sync: false
      }
    },
    number: { density: { enable: true, area: 800 }, value: 100 },
    opacity: {
      animation: { enable: true, minimumValue: 0.5, speed: 1, sync: false },
      random: false,
      value: 1
    },
    shape: {
      character: [
        {
          fill: true,
          font: "Verdana",
          value: ['A', 'B', 'C', 'D', 'E', 
          'F', 'G', 'H', 'I', 'J', 'K', 'L', 
          'M', 'N', 'O', 'P', 'Q', 'R', 'S', 
          'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
          style: "",
          weight: 400
        }
      ],
      image: {
        height: 100,
        replace_color: true,
        src: "images/github.svg",
        width: 100
      },
      polygon: { nb_sides: 5 },
      stroke: { color: "random", width: 1 },
      type: "char"
    },
    size: {
      anim: { enable: true, minimumValue: 2, speed: 10, sync: true },
      random: { minimumValue: 2, enable: true },
      value: 7
    }
  },
  detectRetina: true
        };
    }, []);

    const particlesInit = useCallback((engine) => {
        loadSlim(engine);
        //loadFull(engine);
    }, []);

    return <Particles init={particlesInit} options={options} />
}
export default ParticlesComponent;