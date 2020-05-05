import React from 'react';
import { StyledPage } from '.';
import { Line } from '../Line';
import { Measure } from '../Measure';

export interface PageProps {
    pageWidth: number;
}

export function Page({ pageWidth }: PageProps) {
    return (
        <StyledPage height={Math.floor(pageWidth * (11 / 8.5))} width={pageWidth}>
            <Line>
                <Measure measureHeight={100} measureWidth={200} />
            </Line>
        </StyledPage>
    );
}
