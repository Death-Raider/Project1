import React from 'react'
import styled, {css} from 'styled-components'
import {Button} from './Button'

// const InfoSection = ({InfoData, StyleFunc, ExtraFunc=()=>{}}) => {
//     let Section = styled.section`
//         width: 100%;
//         height: 100%;
//         padding: 4rem 0rem;
//     `;
//
//     return (
//         <Section style={StyleFunc()}>
//         {ExtraFunc()}
//             {InfoData.map((item,index)=>{
//                 let Container = styled.div`
//                     padding: 3rem calc((100vw-1300px)/2);
//                     display: grid;
//                     grid-template-columns: 1fr 1fr;
//                     grid-template-rows: 800px;
//                     font-size: 15px;
//
//                     @media screen and (max-width: 768px){
//                         grid-template-columns: 1fr;
//                         font-size: 3vw;
//                     }
//                 `;
//                 let ColumnLeft = styled.div`
//                     display: flex;
//                     flex-direction: column;
//                     align-items: flex-start;
//                     justify-content: center;
//                     line-height: 1.4;
//                     padding: 1rem 2rem;
//                     order: ${({reverse}) => (reverse?'2':'1')};
//                     h1 {
//                         margin-bottom: 1rem;
//                         font-size: clamp(1.5rem, 6vw, 2rem)
//                     }
//                     p {
//                         margin-bottom: 2rem;
//                     }
//                 `;
//                 let ColumnRight = styled.div`
//                     padding: 1rem 2rem;
//                     order: ${({reverse}) => (reverse?'1':'2')};
//                     display: flex;
//                     justify-content: center;
//                     align-items: center;
//
//                     @media screen and (max-width: 768px){
//                         order: ${({reverse}) => (reverse?'2':'1')};
//                     }
//                     img {
//                         width: 100%;
//                         height: 100%;
//                         object-fit: contain;
//                         overflow: hidden;
//
//                         @media screen and (max-width: 768px) {
//                             width: 90%;
//                             height: 90%;
//                         }
//                     }
//                 `;
//
//                 return(
//                     <Container key={index}>
//                         <ColumnLeft reverse={item.reverse}>
//                             <h1>{item.Heading}</h1>
//                             {(typeof(item.Para1)==='string'?<p>{item.Para1}</p>:item.Para1())}
//                             {(typeof(item.Para2)==='string'?<p>{item.Para2}</p>:item.Para2())}
//                             <Button to={item.link} primary="true"
//                                 style={{display:(JSON.parse(item.BtnShow)?'flex':'none')}}>
//                                 {item.BtnLabel}
//                             </Button>
//                         </ColumnLeft>
//                         <ColumnRight reverse={item.reverse}>
//                             <img src={item.image} alt="img1"/>
//                         </ColumnRight>
//                     </Container>
//                 )
//             })}
//         </Section>
//     )
// }
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

const CreateInfoBox = (Data,row,column) => {
    let InfoBoxCSS = css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content:  ${({img})=>(img?"flex-start":"center")};
        line-height: 1.4;
        padding: 1rem 2rem;
        h1 {
            margin-bottom: 1rem;
            font-size: clamp(1.5rem, 6vw, 2rem)
        }
        p {
            margin-bottom: 2rem;
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
        <InfoBox img={Data.image===""}>
            <h1>{Data.Heading}</h1>
            {(typeof(Data.Para1)==='string'?<p>{Data.Para1}</p>:Data.Para1())}
            {(typeof(Data.Para2)==='string'?<p>{Data.Para2}</p>:Data.Para2())}
            {
                (Data.link)===''?
                <Redirect style={{display:(JSON.parse(Data.BtnShow)?'flex':'none')}} href={Data.href}>
                    {Data.BtnLabel}
                </Redirect>:
                <Button style={{display:(JSON.parse(Data.BtnShow)?'flex':'none')}} primary="true" to={Data.link}>
                    {Data.BtnLabel}
                </Button>
            }
        </InfoBox>
    )
}
const CreateImgBox = (Data, row, column) => {
    let ImgBoxCSS = css`
        padding: 1rem 2rem;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            padding: 1rem;
            width: 100%;
            height: 100%;
            object-fit: contain;
            overflow: hidden;

            @media screen and (max-width: 768px) {
                width: 90%;
                height: 90%;
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
        <ImgBox>
            <img src={Data.image} style={{display:(Data.image===""?'none':'flex')}} />
        </ImgBox>
    )

}


function* ContainerData(Data){
    for(let i = 0; i < Data.length; i++){
        yield CreateInfoBox(Data[i],i+1,1)
        yield CreateImgBox(Data[i],i+1,2)
    }
}

const InfoSection = ({InfoData, StyleFunc, ExtraFunc=()=>{}}) => {
    return (
        <Section style={StyleFunc()}>
            {ExtraFunc()}
            <Container>
                {[...ContainerData(InfoData)].map((item)=>item)}
            </Container>
        </Section>
    )
}
export default InfoSection
