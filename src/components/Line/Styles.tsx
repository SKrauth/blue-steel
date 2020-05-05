import styled from "styled-components";

type LineStyles = {
  height: number,
};

export const StyledLine = styled.div<LineStyles>`
  border: 1px solid #000000;
  height: ${props => props.height.toString() + "px"};
`;
