import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import lightConfig from "../config/particlesjs-config-light.json";
import darkConfig from "../config/particlesjs-config.json";
import styled from "styled-components";
const Box=styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`
const ParticleComponent = ({theme}) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Box>
    <Particles
      id="particles"
      options={theme === "light" ? lightConfig : darkConfig}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
      }}
      />
      </Box>
  );
};

export default ParticleComponent;