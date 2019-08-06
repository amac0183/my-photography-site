import {PropTypes} from 'prop-types'
import styled from 'styled-components';

export const H1 = styled.h1`
  color: ${props => props.inverted ? 'white' : 'black'};
  font-family: Montserrat;
  font-size: 42pt;
  font-weight: bold;
  margin: 0px;
`;

H1.defaultProps = {
  inverted: false
};

H1.propTypes = {
  inverted: PropTypes.bool.isRequired
};