import React from 'react'
import {Link} from 'react-router-dom'

import {H3} from '../components/h3'
import {P} from '../components/paragraph'

import {HeaderContainer} from './components/header_container'
import {MenuContainer} from './components/menu_container'
import {MenuItem} from './components/menu_item'
import {TitleContainer} from './components/title_container'
import {TitleLineContainer} from './components/title_line_container'

export const Header = () => (
  <HeaderContainer>
    <TitleContainer>
      <TitleLineContainer>
        <H3 inverted>Andrew Hayakawa</H3>
      </TitleLineContainer>
      <P inverted>World Traveler & Photographer</P>
    </TitleContainer>
    <MenuContainer>
      <MenuItem><Link to='/'>Home</Link></MenuItem>
      <MenuItem><Link to='/about_me'>About Me</Link></MenuItem>
      <MenuItem><Link to='/nyc'>NYC</Link></MenuItem>
      <MenuItem><Link to='/travels'>Travels</Link></MenuItem>
      <MenuItem><Link to='/portraits'>Portraits</Link></MenuItem>
      <MenuItem><Link to='/style_guide'>Style Guide</Link></MenuItem>
    </MenuContainer>
  </HeaderContainer>
);
