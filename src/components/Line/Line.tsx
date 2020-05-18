import React from 'react';
import { StyledLine } from '.';
import { Measure as MeasureObj } from '../../models';
import { Measure as MeasureComp } from '../Measure';

export interface LineProps {
    width: number;
    measures: MeasureObj[];
}

export function Line({ width, measures }: LineProps) {
    let lineContents = measures.map(measure => {return <MeasureComp key={measure.id} width={width / measures.length} height={60} measure={measure} />})

    return <StyledLine>{lineContents}</StyledLine>;
};
