import React from 'react';
import { StyledPage } from '.';
import { Line } from '../Line';
import { Measure } from '../../models';

export interface PageProps {
    pageWidth: number;
    padding?: number;
}

export function Page({ pageWidth, padding = 20 }: PageProps) {
    let musicBarPlaceholder: Measure[] = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

    return (
        <StyledPage height={Math.floor(pageWidth * (11 / 8.5))} width={pageWidth} padding={padding}>
            <h2>Blue Steel</h2>
            <Line measures={musicBarPlaceholder} width={pageWidth - 2 * padding} />
        </StyledPage>
    );
}
