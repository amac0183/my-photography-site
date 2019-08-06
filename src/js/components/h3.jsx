import {PropTypes} from 'prop-types'
import styled from 'styled-components';

export const H3 = styled.h3`
  color: ${props => props.inverted ? 'white' : 'black'};
  font-family: Montserrat;
  font-size: 24pt;
  font-weight: bold;
  margin: 0px;
`;

H3.defaultProps = {
  inverted: false
};

H3.propTypes = {
  inverted: PropTypes.bool.isRequired
};