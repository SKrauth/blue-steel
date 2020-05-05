import styled from "styled-components";

type MeasureStyles = {
  height: number,
  width: number,
};

type MeasureLineStyles = {
  margin: number,
  weight: number,
}

export const StyledMeasure = styled.div<MeasureStyles>`
  border: 1px solid #000000;
  height: ${props => props.height.toString() + "px"};
  width: ${props => props.width.toString() + "px"};
`;

export const StyledMeasureLine = styled.hr<MeasureLineStyles>`
  border: none;
  border-top: ${props => props.weight.toString() + "px solid #000"};
  margin: ${props => props.margin.toString() + "px 0px " + props.margin.toString() + "px 0px"}
`;
