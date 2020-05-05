import React from 'react';
import { StyledMeasure, StyledMeasureLine } from '.';

export interface MeasureProps {
    measureWidth: number;
    measureHeight: number;
}

export function Measure({ measureWidth, measureHeight }: MeasureProps) {
    let lineWeight: number = 2;

    return (
        <StyledMeasure height={measureHeight} width={measureWidth}>
            <StyledMeasureLine weight={lineWeight} margin={measureHeight / 4 - lineWeight} />
            <StyledMeasureLine weight={lineWeight} margin={measureHeight / 4 - lineWeight} />
            <StyledMeasureLine weight={lineWeight} margin={measureHeight / 4 - lineWeight} />
        </StyledMeasure>
    );
}
