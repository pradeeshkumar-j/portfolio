import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { darkThemes } from './Themes'
import { Design, Develope, PowerBtn } from './Allsvg'
import LogoCompoents from '../subComponents/LogoCompoents'
import SocialIcon from '../subComponents/SocialIcon'
import PowerButton from '../subComponents/PowerButton'
import ParticleComponent from '../subComponents/ParticleComponent'
import spaceman from '../assets/Images/spaceman.png'
const Box = styled.div`
  background: ${(props) => props.theme.body};

  width: 100vw;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  position: relative;
  overflow: hidden;
`;
const float = keyframes`
  0%{ transform:translateY(-10px)}
  50%{ transform:translateY(15px) translateX(15px)}
  100%{ transform:translateY(-10px)}
`
const SpaceMan = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img{
    width: 100%;
    height: auto;
  }
`
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};

  width: 50vw;
  max-height: 65vh;
  padding: 2rem;
  box-sizing: border-box;

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  z-index: 2;

  font-size: calc(0.6rem + 1vw);
  line-height: 1.8;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;

  backdrop-filter: blur(4px);

  overflow-y: auto;
  overflow-x: hidden;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const AboutPage = () => {
  return (
    <ThemeProvider theme={darkThemes} >
      <Box>
        <LogoCompoents theme="dark" />
        <PowerButton />
        <SocialIcon theme="dark" />
        <ParticleComponent theme="dark" />
        <SpaceMan>
          <img src={spaceman} alt='space-man' />
        </SpaceMan>
        <Main>
          I'm a passionate Full Stack Developer and BCA student who enjoys turning ideas into responsive, scalable web applications. I build modern applications using React, Node.js, Express.js, and MongoDB, while continuously strengthening my problem-solving skills through Data Structures and Algorithms.
          <br /><br />
          I don't just learn technologies—I build with them. From interactive frontend experiences to REST APIs and full-stack projects, I focus on writing clean, maintainable code and creating products that deliver real value. Every project is an opportunity to improve my engineering skills and prepare for production-level software development.
          <br /><br />
          Beyond coding, I'm constantly exploring new technologies, improving my development workflow, and challenging myself with DSA and real-world projects. My goal is to grow into a Software Development Engineer who builds impactful products, solves meaningful problems, and never stops learning.

          Always building. Always learning. Always ready for the next challenge.

        </Main>
      </Box>
    </ThemeProvider>
  )
}

export default AboutPage