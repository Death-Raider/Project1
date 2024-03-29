import React, { useState, useRef, useEffect } from 'react';
import styled, {css} from 'styled-components'
import {SliderData} from '../data/SliderData'
import {Button} from './Button'
import {IoMdArrowRoundForward} from 'react-icons/io'
import {IoArrowForward, IoArrowBack} from 'react-icons/io5'

const HeroSection = styled.section`
    height:100vh;
    max-height: 1100px;
    top:0;
    left:0;
    display: flex;
    overflow: hidden;
    position: relative;
    flex: 1;

`;
const Redirect = styled.a`
    background: #000;
    white-space: nowrap;
    outline:none;
    border:none;
    min-width: 100px;
    max-width: 200px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s;
    display: ${({show})=>(show?'flex':'none')};
    justify-content: center;
    align-items: center;
    padding: ${({big})=>(big?'16px 40px':'14px 24px')};
    color: #fff;
    font-size: ${({big})=>(big?'20px':'14px')}

    &:hover{
        transform: translateY(-2px);
    }
`;
const SliderButtons = styled.div`
    position: absolute;
    bottom: 50px;
    right: 50px;
    display: flex;
    z-index: 100;
`;
const HeroWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    font-size: 200%;
`;

const HeroSlide = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 20;
    width: 100%;
    height: 100%;
    display:${({show})=>(show?'initial':'none')}
`;
const HeroSlider = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex
    align-items: center;
    justify-content: center;

    &::before{
        content: '';
        position: absolute;
        width: 100%;
        height: 100vh;
        bottom: 0;
        left: 0;
        overflow: hidden;
        opacity: 0.4;
        z-index: 1;
        background: linear-gradient(
            0deg,
            rgba(0,0,0,0.9) 0%,
            rgba(0,0,0,0.9) 50%,
            rgba(0,0,0,1.6) 100%
        )
    }
`;
const HeroImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`;
const HeroContent = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 1600px;
    width: calc(100%-100px);
    z-index: 20;
    color: #fff;
`;

const Arrow = styled(IoMdArrowRoundForward)`
    margin-left: 0.5rem;
`;
const arrowButtons = css`
    width: 50px;
    height: 50px;
    color: #fff;
    cursor: pointer;
    background: #000;
    border-radius: 50px;
    padding: 10px;
    margine-right: 1rem;
    user-select: none;
    transition: 0.3s;

    &:hover {
        background: #cd853f;
        transform: scale(1.05);
    }
`;
const PrevArrow = styled(IoArrowBack)`
    ${arrowButtons}
`;
const NextArrow = styled(IoArrowForward)`
    ${arrowButtons}
`;


const Hero =()=>{
    const [current, setCurrent] = useState(0)
    const length = SliderData.length
    const timeout = useRef(null)

    useEffect(()=>{
        const nextSlide = () =>{
            setCurrent(current=>(current === length-1?0:current+1))
        }
        timeout.current = setTimeout(nextSlide, 5000)
        return function (){
            if(timeout.current){
                clearTimeout(timeout.current)
            }
        }
    },[current, length])

    const nextSlide = () => {
        if(timeout.current) clearTimeout(timeout.current)
        setCurrent(current === length-1?0:current+1)
    }
    const prevSlide = () => {
        if(timeout.current) clearTimeout(timeout.current)
        setCurrent(current === 0?length-1:current-1)
    }

    return (
        <HeroSection>
            <HeroWrapper>
                {SliderData.map((slide,index)=>{
                    return (
                    <HeroSlide key={index} show={index === current}>
                        {index === current && (
                            <HeroSlider>
                                <HeroImage src={slide.img} alt={slide.alt}/>
                                <HeroContent>
                                    <h1>{slide.title}</h1>
                                    <p>{slide.description}</p>
                                    { (slide.path==="")?
                                        <Redirect show="true" href={slide.href}>
                                            {slide.label}
                                            <Arrow />
                                        </Redirect>:
                                        <Button to={slide.path} primary="true" show="true"
                                        css={`max-width: 160px`}>
                                            {slide.label}
                                            <Arrow />
                                        </Button>
                                    }
                                </HeroContent>
                            </HeroSlider>
                        )}
                    </HeroSlide>
                );
                })}
                <SliderButtons>
                    <PrevArrow onClick={prevSlide}/>
                    <NextArrow onClick={nextSlide}/>
                </SliderButtons>
            </HeroWrapper>
        </HeroSection>
    )
}
export { Hero }
// <HeroImage src={slide.img} alt={slide.alt}/>
