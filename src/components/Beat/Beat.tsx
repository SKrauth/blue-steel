import React from 'react';
import { StyledBeat, OverlayParent, OverlayChild } from '../css';
import { Note as NoteObj } from '../../models';
import { Note as NoteComp } from '../Note';

export interface BeatProps {
    width: number;
    height: number;
    noteSpacing: number;
    notes?: NoteObj[];
}

// topNote is the numerical representation for F5 which is the top not in Treble clef, will need to pass value here for other clefs
// probably not good to assume treble clef by default once other clefs are supported.
function getVerticalOffset(spacing: number, noteName: string, topNote: number = 45) {
    let pitchCode = noteName.charCodeAt(0) - 'A'.charCodeAt(0);
    let octave = parseInt(noteName.charAt(1)) * 8;
    let noteCode = octave + pitchCode;

    if (noteCode > topNote) {
        console.log('above the staff');
        return -1 * (noteCode - topNote) * (spacing / 2) - (spacing / 2);
    } else if (noteCode < topNote) {
        console.log('on the staff');
        return (topNote - noteCode) * (spacing / 2)- (spacing / 2);
    }

    return 0 - (spacing / 2);
}

export function Beat({ width, height, notes, noteSpacing }: BeatProps) {
    // beat contains logic for calculating note x/y/fontSize within it's container, line spacing could be useful here
    // beat contains grouping/structure logic for note

    return (
        <StyledBeat height={height} width={width}>
            <OverlayParent>
                {notes?.map((note) => {
                    return (
                        <OverlayChild key={note.id} x={10} y={getVerticalOffset(noteSpacing, note.pitch)}>
                            <NoteComp fontSize={noteSpacing} />
                        </OverlayChild>
                    );
                })}
            </OverlayParent>
        </StyledBeat>
    );
}
