import styled from 'styled-components';

type NoteProps = {
    size: number;
};

export const StyledNote = styled.span<NoteProps>`
    border: ${(props) => (props.size / 4).toString() + 'px solid #000000'};
    height: ${(props) => (props.size / 2).toString() + 'px'};
    width: ${(props) => ((props.size / 2) * 1.5).toString() + 'px'};
    background-color: #ggg;
    border-radius: 50%;
    display: inline-block;
`;
