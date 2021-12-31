import React from 'react';
import { Text, View } from 'react-native';
import { Link } from 'react-router-dom'
import styled, {css} from 'styled-components'
import {menuData} from '../data/MenuBar'
import {Button} from './Button'
import { FaBars } from 'react-icons/fa'

const Nav = styled.div`
    background: rgba(230,230,230,60%);
    display: flex;
    justify-content: space-between;
    padding: 1rem 1rem;
    position: fixed;
    z-index:100;
    width: 100%;
`;
const NavLink = css`
    color: #000;
    display: flex;
    align-items: center;
    padding: 0rem 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
`;
const Home = styled(Link)`
    ${NavLink};
    padding: 1rem 0rem;
    font-style: italic;
`;
const NavMenu = styled.div`
    display:flex;
    align-items: center;
    margin-right: -48px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;
const MenuBar = styled(FaBars)`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        height: 40px;
        width: 40px;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-50%,50%)
    }
`;
const NavMenuLinks = styled(Link)`
    ${NavLink};
`;
const NavBtn = styled.div`
    display:flex;
    align-items:center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;
const NavBar =({toggle})=>{
    return (
        <Nav>
            <Home to='/'>Darsh Kachroo</Home>
            <MenuBar onClick={toggle} />
            <NavMenu>
                {menuData.map((item,index)=>(
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to='/connections' primary='false' show='true'>Connections</Button>
            </NavBtn>
        </Nav>
    )
}
export { NavBar }
