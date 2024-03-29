import React from 'react'
import styled, {css} from 'styled-components'
import {Button} from './Button'

const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 4rem 0rem;
`;
const Container = styled.div`
    padding: 3rem calc((100vw-1300px)/2);
    display: grid;
    grid-template-columns: 1fr 0.5fr;
    font-size: 15px;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        font-size: 3vw;
    }
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

const createInfoBox = (Data,row,column, key) => {
    let InfoBoxCSS = css`
        flex-direction: column;
        align-items: flex-start;
        justify-content:  ${({img})=>(img?"flex-start":"center")};
        line-height: 1.4;
        padding: 1rem 2rem;
        font-size: 150%;
        display: flex;
        
        
        h1 {
            margin-bottom: 1rem;
            font-size: clamp(1.5rem, 6vw, 2rem)
            display: flex;
            position: relative;
            align-self: center;
        }
        p {
            display:flex;
            flex-wrap: wrap;
            margin-bottom: 2rem;
            text-align: justify;
        }
    `;

    let InfoBox = styled.div`
        ${InfoBoxCSS}
        @media screen and (max-width: 768px){
            grid-column: 1/span 1 ;
            grid-row: ${row*2-1}/span 1 ;
        }
        grid-row: ${row}/span 1 ;
        grid-column: ${({img})=>(img?"1/span 2":"1/span 1")} ;
    `;

    return (
        <InfoBox img={Data.image===""} key= {key}>
            <h1>{Data.Heading}</h1>
            {(typeof(Data.Para1)==='string'?<p>{Data.Para1}</p>:Data.Para1())}
            {(typeof(Data.Para2)==='string'?<p>{Data.Para2}</p>:Data.Para2())}
            {
                (Data.link)===''?
                <Redirect style={{display:(JSON.parse(Data.BtnShow)?'flex':'none')}} css={"display:flex;text-align: justify;"} href={Data.href} download>
                    {Data.BtnLabel}
                </Redirect>:
                <Button style={{display:(JSON.parse(Data.BtnShow)?'flex':'none')}} css={"display:flex;text-align: justify;"} primary="true" to={Data.link}>
                    {Data.BtnLabel}
                </Button>
            }
        </InfoBox>
    )
}
const createImgBox = (Data, row, column, key) => {
    let ImgBoxCSS = css`
        padding: 1rem 2rem;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            padding: 1rem;
            overflow: hidden;
            object-fit:contain;
            width: 100%;
            height: 100%;
            animation: load 5s;
            @media screen and (max-width: 768px) {
                width: 90%;
                height: 90%;
            }
            @keyframes load{
                from {opacity:0%;}
                to {
                    opacity: 100%;
                }
            }
        }
    `;

    let ImgBox = styled.div`
        ${ImgBoxCSS}
        @media screen and (max-width: 768px){
            grid-column: 1/span 1 ;
            grid-row: ${row*2}/span 1 ;
        }

        grid-column: ${column}/span 1 ;
        grid-row: ${row}/span 1 ;
    `;

    return (
        <ImgBox key = {key}>
            <img onClick={()=>{window.open(Data.image,"_blank")}} src={Data.image} style={{display:(Data.image===""?'none':'flex')}} />
        </ImgBox>
    )

}


function* containerData(Data){
    for(let i = 0; i < Data.length; i++){
        yield createInfoBox(Data[i],i+1,1, 2*i)
        yield createImgBox(Data[i],i+1,2, 2*i+1)
    }
}

const InfoSection = ({InfoData, StyleFunc, ExtraFunc=()=>{}}) => {
    return (
        <Section style={StyleFunc()}>
            {ExtraFunc()}
            <Container>
                {[...containerData(InfoData)].map((item)=>item)}
            </Container>
        </Section>
    )
}
export default InfoSection
