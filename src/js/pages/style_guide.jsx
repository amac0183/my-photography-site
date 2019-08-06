import React from 'react'
import {A} from '../components/a'
import {H1} from '../components/h1'
import {H2} from '../components/h2'
import {H3} from '../components/h3'
import {H4} from '../components/h4'
import {H5} from '../components/h5'
import {P} from '../components/paragraph'
import {BasePage} from './base'
import {Section} from '../components/section'

export const StyleGuidePage = () => (
  <BasePage>
    <Section title='Style Guide'>
      <H1 inverted>Header 1</H1>
      <H2 inverted>Header 2</H2>
      <H3 inverted>Header 3</H3>
      <H4 inverted>Header 4</H4>
      <H5 inverted>Header 5</H5>
      <P inverted>Paragraph</P>
      <A inverted><P>Link</P></A>
    </Section>
  </BasePage>
)
