import {PropTypes} from 'prop-types'
import styled from 'styled-components';

export const H5 = styled.h5`
  color: ${props => props.inverted ? 'white' : 'black'};
  font-family: Montserrat;
  font-size: 14pt;
  font-weight: bold;
  margin: 0px;
`;

H5.defaultProps = {
  inverted: false
};

H5.propTypes = {
  inverted: PropTypes.bool.isRequired
};
