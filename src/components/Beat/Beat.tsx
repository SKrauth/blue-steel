import React from 'react';
import { StyledBeat } from '../css'
import { Note } from '../../models';

export interface BeatProps {
    width: number;
    height: number;
    notes?: Note[];
}

export function Beat({width, height, notes}: BeatProps) {
// beat should contain a span with height = measureHeight + measureMargin
// beat width = measureWidth / measure.timeSignature.length
// beat contains logic for calculating note x/y within it's span
// beat contains grouping/structure logic for note

  return <StyledBeat>
    <>{console.log(width, height, notes)}</>
  </StyledBeat>
}
