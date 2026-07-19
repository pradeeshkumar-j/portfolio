import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightThemes } from './Themes'
import { Design, Develope, PowerBtn } from './Allsvg'
import LogoCompoents from '../subComponents/LogoCompoents'
import SocialIcon from '../subComponents/SocialIcon'
import PowerButton from '../subComponents/PowerButton'
import ParticleComponent from '../subComponents/ParticleComponent'

const Box = styled.div`
  background: ${(props) => props.theme.body};

  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  flex-wrap: wrap;

  padding: 2rem;
  box-sizing: border-box;
  position: relative;
  overflow-x: hidden;

  @media (max-width: 1200px) {
    gap: 2.5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    padding: 6rem 1rem 2rem;
  }
`;

const Main = styled.div`
  width: min(500px, 100%);
  min-height: 430px;

  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};

  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);

  border-radius: 16px;

  padding: 2rem;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  transition: 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }

  ${'' /* Tablet */}
  @media (max-width: 1024px) {
    width: 460px;
    min-height: 420px;
  }

  ${'' /* Mobile */}
  @media (max-width: 768px) {
    width: 100%;
    min-height: auto;
    padding: 1.5rem;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;

  margin-bottom: 1.5rem;

  ${Main}:hover & > * {
    fill: ${(props) => props.theme.body};
  }
`;
const Description = styled.div`
  width: 100%;

  font-size: clamp(1rem, 2vw, 1.15rem);
  line-height: 1.8;
  text-align: left;

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    display: block;
    margin: 1rem 0 0.7rem;
    font-size: clamp(1.1rem, 2vw, 1.25rem);
    font-weight: bold;
  }

  p {
    margin: 0.4rem 0;
    word-break: break-word;
  }

  ul {
    padding-left: 1.2rem;
  }

  li {
    margin-bottom: 0.5rem;
  }
`;
const MyskillsPage = () => {
  return (
    <ThemeProvider theme={lightThemes} >
      <Box>
        <LogoCompoents theme="light" />
        <PowerButton />
        <SocialIcon theme="light" />
        <ParticleComponent theme="light" />
        <Main>
          <Title>
            <Design width={40} height={40} /> FullStack
          </Title>
          <Description>
           Building responsive, scalable, and production-ready web applications using modern frontend and backend technologies.
          </Description>
          <Description>
            <strong>I LIKE TO CODE IN</strong>
              <p>React.js, Java, JavaScript (ES6+), Python, </p>
              <p>Node.js, Express.js, Spring Boot, MySQL</p>
            <strong>TOOLS</strong>
            <p>MongoDB Compass, Visual Studio Code, Git & GitHub,</p>
            <p>MySQL Workbench, Chrome DevTools, IntelliJ IDEA</p>
          </Description>
        </Main>
        <Main>
          <Title>
            <Design width={40} height={40} /> Software Engineering
          </Title>
          <Description>
            Developing scalable software solutions with efficient algorithms and clean engineering practices.
          </Description>
          <Description>
            <strong>ENGINEERING SKILLS</strong>
            <p>Data Structures & Algorithms , Object-Oriented Programming ,</p>
            <p>REST API Development , Database Design , Problem Solving </p>
            <strong>TOOLS</strong>
            <p>Maven, Docker, Jira </p>
          </Description>
        </Main>

      </Box>
    </ThemeProvider>
  )
}

export default MyskillsPage