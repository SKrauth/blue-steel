import styled from "styled-components";

type BeatProps = {
    height: number;
    width: number;
};

export const StyledBeat = styled.span<BeatProps>`
  height: ${(props) => props.height.toString() + 'px'};
  width: ${(props) => props.width.toString() + 'px'};
  display: inline-block;
`;
