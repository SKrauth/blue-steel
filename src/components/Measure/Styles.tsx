import styled from "styled-components";

type MeasureStyles = {
  height: number,
  width: number,
};

export const StyledMeasure = styled.div<MeasureStyles>`
  border: 1px solid #000000;
  height: ${props => props.height.toString() + "px"};
  width: ${props => props.width.toString() + "px"};
`;
