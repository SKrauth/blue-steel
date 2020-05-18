import React from 'react';
import { StyledPage } from '.';
import { Line } from '../Line';
import { Measure } from '../../models';

export interface PageProps {
    pageWidth: number;
    padding?: number;
}

export function Page({ pageWidth, padding = 20 }: PageProps) {
    let musicPlaceholder: Measure[] = [{ id: 1, number: 1, timeSignature: {top: 4, bottom: 4}, notes: [{ id: 1, count: 1, duration: 1, pitch: "C5"}, { id: 2, count: 2, duration: 1, pitch: "C5"}, { id: 3, count: 3, duration: 1, pitch: "C5"}, { id: 4, count: 4, duration: 1, pitch: "C5"}, ] }, { id: 2 , number: 2, timeSignature: {top: 4, bottom: 4} }, { id: 3, number: 3, timeSignature: {top: 4, bottom: 4}  }, { id: 4, number: 4, timeSignature: {top: 4, bottom: 4}  }, { id: 5, number: 5, timeSignature: {top: 4, bottom: 4}  }];

    return (
        <StyledPage height={Math.floor(pageWidth * (11 / 8.5))} width={pageWidth} padding={padding}>
            <h2>Blue Steel</h2>
            <Line measures={musicPlaceholder} width={pageWidth - 2 * padding} />
        </StyledPage>
    );
}
