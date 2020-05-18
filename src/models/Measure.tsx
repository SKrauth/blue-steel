import { Note } from '.'

export interface Measure {
  id: number;
  // probably could be handled by a constructor
  // needs a setter to protect from duplicates
  number: number;
  // needs a default implementation in constructor
  timeSignature: {
    top: number;
    bottom: number;
  };
  notes?: Note[];
}
