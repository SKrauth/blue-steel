import React from 'react';
import { StyledPage } from '.'

export interface PageProps { pageWidth: number; }

export function Page({pageWidth}: PageProps) {
  console.log(<StyledPage height={Math.floor(pageWidth * (11/8.5))}  width={pageWidth} />)
    return (
      <StyledPage height={Math.floor(pageWidth * (11/8.5))}  width={pageWidth}>
        Hello World
      </StyledPage>
    )
}
