export interface Note {
  id: number;
  count: number;
  duration: number;
  pitch: SPN;
}

// Scientific Pitch Notation, should be a fixed set so hardcoding it shouldn't be as ugly as it looks here
type SPN = "A0" | "B0" | "C0" | "D0" | "E0"| "F0"| "G0" |
          "A1" | "B1" | "C1" | "D1" | "E1"| "F1"| "G1" |
          "A2" | "B2" | "C2" | "D2" | "E2"| "F2"| "G2" |
          "A3" | "B3" | "C3" | "D3" | "E3"| "F3"| "G3" |
          "A4" | "B4" | "C4" | "D4" | "E4"| "F4"| "G4" |
          "A5" | "B5" | "C5" | "D5" | "E5"| "F5"| "G5" |
          "A6" | "B6" | "C6" | "D6" | "E6"| "F6"| "G6" |
          "A7" | "B7" | "C7" | "D7" | "E7"| "F7"| "G7" |
          "A8" | "B8" | "C8" | "D8" | "E8"| "F8"| "G8" |
          "A9" | "B9" | "C9" | "D9" | "E9"| "F9"| "G9";
