import {PropTypes} from 'prop-types'
import styled from 'styled-components';

export const P = styled.p`
  color: ${props => props.inverted ? 'white' : 'black'};
  font-family: Montserrat;
  font-size: 10pt;
  font-weight: light;
  margin: 0;
`;

P.defaultProps = {
  inverted: false
};

P.propTypes = {
  inverted: PropTypes.bool.isRequired
};