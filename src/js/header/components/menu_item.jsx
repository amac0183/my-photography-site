import React from 'react'
import PropTypes from 'prop-types'

import {H5} from '../../components/h5'

import {MenuItemContainer} from './menu_item_container'

export const MenuItem = ({children}) => (
  <MenuItemContainer>
    <H5>{children}</H5>
  </MenuItemContainer>
);

MenuItem.propTypes = {
  children: PropTypes.element.isRequired
};
