import React from 'react'
import { NavLink } from 'react-router-dom'
import { Github, Twitter, Linkdin } from '../components/Allsvg'
import styled from 'styled-components'
import {darkThemes} from '../components/Themes'
const Icons = styled.div`
display:flex;
flex-direction:column;
align-items:center;
position:fixed;
bottom:0;
left:2rem;
z-index:3;

&>*:not(:last-child){
margin:0.5rem 0;
} 
`
const Line=styled.span`
width:2px;
height:8rem;
background-color:${props=>props.color==="dark" ? darkThemes.text :darkThemes.body}
`

const SocialIcon = (props) => {
    return (
        <Icons>
            <div>
                <div>
                    <NavLink style={{color:`inherit`}} target='_blank' to={{pathname:"https://github.com/pradeeshkumar-j"}}>
                        <Github width={25} height={25} fill={props.theme==="dark"?darkThemes.text: darkThemes.body} />
                    </NavLink>
                </div>
               
                <div>
                    <NavLink style={{color:`inherit`}} target='_blank' to={{pathname:"www.linkedin.com/in/pradeeshkumar-"}}>
                        <Linkdin width={25} height={25} fill={props.theme==="dark"?darkThemes.text: darkThemes.body}  />
                    </NavLink>
                </div>
            </div>
            <Line color={props.theme}/>
        </Icons>
    )
}

export default SocialIcon