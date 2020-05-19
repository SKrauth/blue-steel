import React from 'react';
import { StyledMeasure, StyledMeasureLine } from '../css';
import { Measure as MeasureObj, Note } from '../../models';
import { Beat } from '../Beat';

export interface MeasureProps {
    width: number;
    height: number;
    measure: MeasureObj;
    lineWeight?: number;
}

export function Measure({ width, height, measure, lineWeight = 1 }: MeasureProps) {
    const lineSpacing: number = height / 4 - lineWeight;
    const duration = measure.timeSignature.top / measure.timeSignature.bottom;

    // some notes can span multiple beats

    return (
        <>
            <StyledMeasure height={height} width={width}>
                {
                    // measures divide notes into beats
                    Array.from(Array(measure.timeSignature.top).keys()).map((_, beat) => {
                        let notes: Array<Note> | undefined = measure.notes?.filter(
                            (note) => ( beat + 1 ) <= note.count && note.count < ( beat + 1 )  + duration,
                        );
                        return <Beat key={beat} notes={notes} height={height} width={width / duration} />;
                    })
                }
                <StyledMeasureLine weight={lineWeight} margin={lineSpacing} />
                <StyledMeasureLine weight={lineWeight} margin={lineSpacing} />
                <StyledMeasureLine weight={lineWeight} margin={lineSpacing} />
            </StyledMeasure>
        </>
    );
}
