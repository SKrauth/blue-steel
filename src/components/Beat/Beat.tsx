import React from 'react';
import { StyledBeat, OverlayParent, OverlayChild } from '../css';
import { Note as NoteObj } from '../../models';
import { Note as NoteComp } from '../Note';

export interface BeatProps {
    width: number;
    height: number;
    notes?: NoteObj[];
}

export function Beat({ width, height, notes }: BeatProps) {
    // beat should contain a span with height = measureHeight + measureMargin
    // beat contains logic for calculating note x/y within it's span
    // beat contains grouping/structure logic for note

    return (
        <StyledBeat height={height} width={width}>
            <OverlayParent>
                {notes?.map(() => {
                    return (
                        <OverlayChild x={10} y={20}>
                            <NoteComp />
                        </OverlayChild>
                    );
                })}
            </OverlayParent>
        </StyledBeat>
    );
}
