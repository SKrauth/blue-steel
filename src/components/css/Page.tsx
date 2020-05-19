import styled from "styled-components";

type PageStyles = {
  height: number,
  width: number,
  padding: number,
};

export const StyledPage = styled.div<PageStyles>`
  border: 1px solid #000000;
  height: ${props => props.height.toString() + "px"};
  width: ${props => props.width.toString() + "px"};
  padding: ${props => props.padding.toString() + "px"};
`;
