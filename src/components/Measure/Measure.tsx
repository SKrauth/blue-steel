import React from 'react';
import { StyledMeasure } from '.'

export interface MeasureProps { measureWidth: number; measureHeight: number; }

export function Measure({measureWidth, measureHeight}: MeasureProps) {
    return (
      <StyledMeasure height={measureHeight}  width={measureWidth}>
      </StyledMeasure>
    )
}
