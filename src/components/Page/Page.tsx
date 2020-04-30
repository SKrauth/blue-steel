import React from 'react';
import { canvasStyles } from '.'

export interface PageProps { height: number; width: number; }

export function Page({height, width}: PageProps) {
    return (
      <div>
      <canvas width={width} height={height} style={canvasStyles}></canvas>
      </div>
    )
}
