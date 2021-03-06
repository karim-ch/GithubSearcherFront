import React from 'react';
import styled, { StyledComponent } from 'styled-components';

const Component = (component: React.ComponentProps<any>): StyledComponent<any, any> => styled(
  component,
)`
  text-align: center;
  text-align: -webkit-center;
  margin-top: 10%;
`;

export default Component;
