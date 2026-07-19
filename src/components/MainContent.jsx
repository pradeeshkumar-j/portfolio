import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import PowerButton from '../subComponents/PowerButton.jsx'
import LogoCompoents from '../subComponents/LogoCompoents.jsx'
import SocialIcon from '../subComponents/SocialIcon.jsx'
import { NavLink } from 'react-router-dom'
import { YinYang } from './Allsvg';
import Intro from './Intro.jsx'
import { motion } from 'framer-motion'
const MainStyle = styled.div`
background:${props => props.theme.body};
width:100vw;
height:100vh;
overflow:hidden;
position:relative;
h2,h3,h4,h5,h6{

font-family:'Karla'sans-serif;
font-weight:500;
}
`
const Conatiner = styled.div`
padding:2rem;
`

const Contact = styled(NavLink)`
color:${props => props.theme.text};
position:absolute;
top:2rem;
right:calc(1rem + 2vw);
text-decoration:none;
z-index:1;
`

const BLOG = styled(NavLink)`
color:${props => props.theme.text};
position:absolute;
top:50%;
right:calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%,-50%);
text-decoration:none;
z-index:1;
`
const Work = styled(NavLink)`
color:${props => props.click ? props.theme.body : props.theme.text};
position:absolute;
top:50%;
left:calc(1rem + 2vw);
transform: translate(-50% , -50%) rotate(-90deg);
text-decoration:none;
z-index:1;
`
const BottomBar = styled.div`
position:absolute;
bottom:1rem;
left:0;
right:0;
width:100%;
display:flex;
justify-content: space-evenly;
`
const ABOUT = styled(NavLink)`
color:${props => props.click ? props.theme.body : props.theme.text};
text-decoration:none;
z-index:1;
`
const Skills = styled(NavLink)`
color:${props => props.theme.text};
text-decoration:none;
z-index:1;
`

const rotate = keyframes`
from{
transform:rotate(0);}
to{
transform:rotate(360deg);
}`
const Center = styled.button`
position:absolute;
top:${props => props.click ? '85%' : '50%'};
left:${props => props.click ? '92%' : '50%'};
transform: translate(-50%,-50%);
border:none;
outline:none;
background-color: transparent;
cursor:pointer;

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
transition:all 1s ease;

&>:first-child{
animation:${rotate} infinite 1.5s linear;
}

&>:last-child{
display:${props => props.click ? 'none' : 'inline-block'};
padding-top: 1rem;
}
`
const DarkDiv = styled.div`
position:absolute;
top:0;
background-color:#000;
bottom:0;
right:50%;
width:${props => props.click ? '50%' : '0%'};
height:${props => props.click ? '100%' : '0%'};
z-index:1;
transition:height 0.5s ease,width 1s ease 0.5s;
`
const MainContent = () => {

  const [click, setClick] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const handleClick = () => {
    if (!click) {
      setClick(true);
    } else {
      setClick(false);
      setShowIntro(false);
    }
  };

  useEffect(() => {
    let timer;

    if (click) {
      timer = setTimeout(() => {
        setShowIntro(true);
      }, 1000); 
    }

    return () => clearTimeout(timer);
  }, [click]);
  return (
    <MainStyle>
      <DarkDiv click={click} />
      <Conatiner>
        <PowerButton />
        <LogoCompoents theme={click ? 'dark' : 'light'} />
        <SocialIcon theme={click ? 'dark' : 'light'} />
        <Center click={click}>
          <YinYang
            onClick={handleClick}
            width={click ? 120 : 200}
            height={click ? 120 : 200}
            fill="currentColor"
          />          <span>click here</span>
        </Center>
        <Contact target='_blank' to={{ pathname: "mailto:pradeeshkumar163@gmail.com" }}>
          <motion.h2
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Say hi...
          </motion.h2>
        </Contact>
        <BLOG to={"/feats"} click={click}>
          <motion.h2
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
            Feats
          </motion.h2>
        </BLOG>
        {/* <Work to={"/skill"} click={click}>
          <motion.h2
          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
          >
            My Skills
          </motion.h2>
        </Work> */}
        <BottomBar>
          <ABOUT to="/about" click={click}>
            <motion.h2
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              About.
            </motion.h2>
          </ABOUT>
          <Skills to="/skills">
            <motion.h2
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              Skills...
            </motion.h2>
          </Skills>
        </BottomBar>
      </Conatiner>
      {showIntro && <Intro />}
    </MainStyle>
  )
}

export default MainContent