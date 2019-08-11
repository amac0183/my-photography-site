import {COLORS} from '../constants/colors'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export const BasePage = styled.div`
  background-color: ${COLORS.tundora}
  padding-bottom: 30px;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 30px;
`;

BasePage.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element
  ]).isRequired
}
