import React from 'react';
import { StyledLine } from '.'

export interface LineProps {lineHeight: number; }

export const Line : React.FunctionComponent<LineProps> =
  ({lineHeight, children}) =>
{
    return (
      <StyledLine height={lineHeight}>
        {children}
      </StyledLine>
    )
}
