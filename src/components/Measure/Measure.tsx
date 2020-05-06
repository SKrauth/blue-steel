import React from 'react';
import { StyledMeasure, StyledMeasureLine } from '.';

export interface MeasureProps {
    measureWidth: number;
    measureHeight: number;
}

export function Measure({ measureWidth, measureHeight }: MeasureProps) {
    let lineWeight: number = 1;
    let marginHeight: number = measureHeight / 4 - lineWeight;

    return (
        <StyledMeasure height={measureHeight} width={measureWidth}>
            <StyledMeasureLine weight={lineWeight} margin={marginHeight} />
            <StyledMeasureLine weight={lineWeight} margin={marginHeight} />
            <StyledMeasureLine weight={lineWeight} margin={marginHeight} />
        </StyledMeasure>
    );
}
