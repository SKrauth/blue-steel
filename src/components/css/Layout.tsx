import styled from 'styled-components';

type OverlayChildProps = {
    x?: number;
    y?: number;
};

export const OverlayParent = styled.div`
    position: relative;
`;

export const OverlayChild = styled.div<OverlayChildProps>`
    position: absolute;
    top: ${(props) => {
        if (props.y) {
            return props.y + 'px';
        } else {
            return '0px';
        }
    }};
    left: ${(props) => {
        if (props.x) {
            return props.x + 'px';
        } else {
            return '0px';
        }
    }};
`;
