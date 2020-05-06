import React from 'react';
import { StyledLine } from '.';
import { Measure as MeasureObj } from '../../models'
import { Measure as MeasureComp } from '../Measure'

export interface LineProps {
    width: number;
    measures: MeasureObj[];
}

export function Line({ width, measures }: LineProps) {
    let lineContents = measures.map(() => {return <MeasureComp measureWidth={width / measures.length} measureHeight={60} />})

    return <StyledLine>{lineContents}</StyledLine>;
};
