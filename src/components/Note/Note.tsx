import React from 'react';
import { StyledNote } from '../css'

export interface NoteProps {
  x: number;
  y: number;
}

export function Note({}: NoteProps) {
  return <StyledNote />
}
// note is going to have multiple implementations that inherit from it
// note will mostly contain only display logic
