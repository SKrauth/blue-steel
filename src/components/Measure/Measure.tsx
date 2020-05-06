import React from 'react';
import { StyledMeasure, StyledMeasureLine } from '.';

export interface MeasureProps {
    measureWidth: number;
    measureHeight: number;
    lineWeight?: number;
}

export function Measure({ measureWidth, measureHeight, lineWeight = 1 }: MeasureProps) {
    let marginHeight: number = measureHeight / 4 - lineWeight;

    // beat should contain a span with height = measureHeight + measureMargin
    // beat width = measureWidth / measure.timeSignature.length
    // beat contains logic for calculating note x/y within it's span
    // beat contains grouping/structure logic for note

    return (
        <StyledMeasure height={measureHeight} width={measureWidth}>
            <StyledMeasureLine weight={lineWeight} margin={marginHeight} />
            <StyledMeasureLine weight={lineWeight} margin={marginHeight} />
            <StyledMeasureLine weight={lineWeight} margin={marginHeight} />
        </StyledMeasure>
    );
}
