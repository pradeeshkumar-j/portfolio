import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Anchor, LinkIcon } from '../components/Allsvg'
const Cotanier=styled.div`
    position: relative;
`
const Slider=styled.div`
    position: fixed;
    top: 2;
    right: 2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    transform: translateY(-100%);

    .chain{
        transform: rotate(135deg);
    }
`
const PreDisplay=styled.div`
position: absolute;
top:0;
right: 2rem;
`
const AnchorComponent = (props) => {
   
    const reff=useRef(null);
    const hiddenRef=useRef(null);
    useEffect(()=>{
        const handleScroll = () =>{
            let scrollPostion=window.pageYOffset;
            let windowSize=window.innerHeight;
            let bodyHeight=document.body.offsetHeight;
            let diff=Math.max(bodyHeight-(scrollPostion + windowSize))
            let diffP = (diff * 100) / (bodyHeight - windowSize)
            reff.current.style.transform=`translateY(${-diffP}%)`
            if(window.pageYOffset > 5){
                hiddenRef.current.style.display = 'none';
            }else{
                hiddenRef.current.style.display='block'
            }
        } 
        window.addEventListener('scroll',handleScroll)
    })
  return (
    <Cotanier>
        <PreDisplay ref={hiddenRef} className='hidden'>
            <Anchor width={70} height={70} fill='currentColor' />
        </PreDisplay>
        <Slider ref={reff}>
        {
            [...Array(props.numbers)].map((x,id)=>{
                return   <LinkIcon key={id} width={25} height={25} fill="currentColor" className="chain" />
            })
        }
        <Anchor width={70} height={70} fill="currentColor" />
        </Slider>
        </Cotanier>
  )
}

export default AnchorComponent;