import {PropTypes} from 'prop-types'
import styled from 'styled-components';

export const H2 = styled.h2`
  color: ${props => props.inverted ? 'white' : 'black'};
  font-family: Montserrat;
  font-weight: bold;
  font-size: 36pt;
  margin: 0px;
`;

H2.defaultProps = {
  inverted: false
};

H2.propTypes = {
  inverted: PropTypes.bool.isRequired
};