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
    // beat contains logic for calculating note x/y/fontSize within it's container, line spacing could be useful here
    // beat contains grouping/structure logic for note

    return (
        <StyledBeat height={height} width={width}>
            <OverlayParent>
                {notes?.map(() => {
                    return (
                        <OverlayChild x={10} y={20}>
                            <NoteComp fontSize={15} />
                        </OverlayChild>
                    );
                })}
            </OverlayParent>
        </StyledBeat>
    );
}
