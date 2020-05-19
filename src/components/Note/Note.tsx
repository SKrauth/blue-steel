import React from 'react';
import { StyledNote } from '../css'

// note is going to have multiple implementations that inherit from it
// note will mostly contain only display logic
// base note should only draw circle, as not all notes have stems

export interface NoteProps {
  fontSize: number;
}

export function Note({fontSize}: NoteProps) {
  return <StyledNote size={fontSize} />
}
