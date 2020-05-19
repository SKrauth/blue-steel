import styled from 'styled-components';

type MeasureProps = {
    height: number;
    width: number;
};

type MeasureLineProps = {
    margin: number;
    weight: number;
    width: number;
};

export const StyledMeasure = styled.div<MeasureProps>`
    border: 1px solid #000000;
    height: ${(props) => props.height.toString() + 'px'};
    width: ${(props) => props.width.toString() + 'px'};
    display: inline-block;
`;

export const StyledMeasureLine = styled.hr<MeasureLineProps>`
  border: none;
  border-top: ${(props) => props.weight.toString() + 'px solid #000'};
  margin: ${(props) => props.margin.toString() + 'px 0px ' + props.margin.toString() + 'px 0px'};
  width: ${(props) => props.width.toString() + 'px'};
`;
