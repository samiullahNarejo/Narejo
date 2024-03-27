import React from 'react'
import { NavLink } from 'react-router-dom'
import styled, { ThemeConsumer } from 'styled-components'
import Navbar from './Navbar'

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/Narejo/">
      </NavLink>
      <Navbar />
    </MainHeader>
  )
}

const MainHeader = styled.header`
padding: 0 4.8rem;
height: 10rem;
background-color: ${({theme})=>theme.colors.bg};
display: flex;
justify-content: space-between;
align-items: center;


`;

export default Header