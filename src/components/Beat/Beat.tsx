import React from 'react';
import { StyledBeat } from '.'

export interface BeatProps {
    width: number;
    height: number;
}

export function Beat({}: BeatProps) {
// beat should contain a span with height = measureHeight + measureMargin
// beat width = measureWidth / measure.timeSignature.length
// beat contains logic for calculating note x/y within it's span
// beat contains grouping/structure logic for note

  return <StyledBeat />
}
