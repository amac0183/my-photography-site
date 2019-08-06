import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {H3} from './h3'

const SectionTitleContainer = styled.div`
  margin-bottom: 10px;
`;

export const Section = ({children, title}) => (
  <section>
    <SectionTitleContainer>
      <H3 inverted>{title}</H3>
    </SectionTitleContainer>
    {children}
  </section>
);

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element
  ]).isRequired,
  title: PropTypes.string.isRequired
};
