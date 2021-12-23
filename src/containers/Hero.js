import React from 'react';
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
`;

const HeroWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`;

const HeroSlide = styled.div`
    position: relative;
    z-index: 20;
    width: 100%;
    height: 100%;
`;
const HeroSlider = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: block;
    align-items: center;
    justify-content: center;

    &::before{
        content: '';
        position: absolute;
        width: 100%
        height: 100vh;
        top: 0vh;
        left: 0px;
        overflow: hidden;
        opacity: 0.4;
        background: linear-gradient(
            0deg,
            rgba(0,0,0,0.9) 0%,
            rgba(0,0,0,0.9) 50%,
            rgba(0,0,0,1.6) 100%
        )
    }
`;
const HeroImage = styled.img`
    position: relative;
    display: flex;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`;
const HeroContent = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 1600px;
    width: calc(100%-100px);
    z-index: 10;
    color: #fff;
`;

const Arrow = styled(IoMdArrowRoundForward)``;
const arrowButtons = css`
    width: 50px;
    height: 50px;
    color: #fff;
    cursor: pointer;
    background: #000;
    border-radius: 10px;
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
const SliderButtons = styled.div`
    position: absolute;
    bottom: 50px;
    right: 50px;
    display: flex;
    z-index: 10;
`;

const Hero =()=>{
    return (
        <HeroSection>
            <HeroWrapper>
                {SliderData.map((slide,index)=>{
                    return (
                    <HeroSlide key={index}>
                        <HeroSlider>
                            <HeroImage src={slide.img} alt={slide.alt}/>
                            <HeroContent>
                                <h1>{slide.title}</h1>
                                <p>{slide.description}</p>
                                <Button to={slide.path} primary="true"
                                css={`max-width: 160px`}>
                                    {slide.label}
                                    <Arrow />
                                </Button>
                            </HeroContent>
                        </HeroSlider>
                    </HeroSlide>
                );
                })}
                <SliderButtons>
                    <PrevArrow />
                    <NextArrow />
                </SliderButtons>
            </HeroWrapper>
        </HeroSection>
    )
}
export { Hero }
// <HeroImage src={slide.img} alt={slide.alt}/>
