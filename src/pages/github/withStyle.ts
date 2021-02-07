import React from 'react';
import styled from 'styled-components';

const StyledComponent = (component: React.ComponentProps<any>) => styled(component)`
  text-align: center;
  text-align: -webkit-center;
  margin-top: 10%;
`;

export default StyledComponent;